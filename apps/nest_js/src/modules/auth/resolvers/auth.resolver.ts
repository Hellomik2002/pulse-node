import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { Resolver, Mutation, Args, Parent, ResolveField } from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-core';
import { Cache } from 'cache-manager';
import { randomUUID } from 'crypto';
import { PulseUser } from 'src/@generated/pulse-user/pulse-user.model';
import { prismaClient } from 'src/main';
import { calPrismaClient } from 'src/prisma/client_cal';
import { mainPrismaClient } from 'src/prisma/main_client';



import { LoginInput, PhoneCodeInput, PhoneLoginInput } from '../dto/login.input';
import { RefreshTokenInput } from '../dto/refresh-token.input';
import { SignupInput } from '../dto/signup.input';
import { Auth } from '../models/auth.model';
import { Token } from '../models/token.model';
import { AuthService } from '../services/auth.service';
import { makeNumber, SMSService } from '../services/sms.service';


@Resolver(() => Auth)
export class AuthResolver {
  cashedCode;
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly auth: AuthService,
    private readonly smsService: SMSService
  ) {}

  @Mutation(() => Boolean)
  async signup(@Args("data") data: SignupInput): Promise<boolean> {
    data.address = data.address.trim();
    data.email = data.email.toLowerCase().trim();
    data.fullName = data.fullName.trim();
    data.phoneNumber = data.phoneNumber.trim();
    data.uniqueName = data.uniqueName.trim();

    let user: PulseUser | null = null;
    try {
      user = await mainPrismaClient.pulseUser.findFirstOrThrow({
        where: {
          OR: [{ email: data.email }, { phoneNumber: data.phoneNumber }, { uniqueName: data.uniqueName }],
        },
      });
    } catch (e) {}
    if (user != null) throw new ApolloError("User exist");

    const val = `${1111}`;
    console.log(val);
    const keyCache = data.email + data.fullName + data.uniqueName + data.phoneNumber;
    console.log(keyCache);
    this.cacheManager.set(keyCache, val, 1000 * 1000 * 60 * 2);

    this.smsService.sendCode(val, data.phoneNumber);

    return true;
  }

  @Mutation(() => Auth)
  async verifyCode(
    @Args("data", {type: () => SignupInput}) data: SignupInput,
    @Args("code", { type: () => String }) code: string
  ): Promise<Token> {
    data.address = data.address.trim();
    data.email = data.email.toLowerCase().trim();
    data.fullName = data.fullName.trim();
    data.phoneNumber = data.phoneNumber.trim();
    data.uniqueName = data.uniqueName.trim();

    const keyCache = data.email + data.fullName + data.uniqueName + data.phoneNumber;
    console.log(keyCache);
    const val = await this.cacheManager.get(keyCache);
    console.log("recived code", code, "cashed code", val);
    if (val != code) throw new ApolloError("Code is wrong");
    const { accessToken, refreshToken } = await this.auth.createUser(data);
    return {
      accessToken,
      refreshToken,
    };
  }

  @Mutation(() => Auth)
  async login(@Args("data") { uniqueName, password }: LoginInput) {
    const { tokens, user } = await this.auth.login(uniqueName.toLowerCase(), password);
    return {
      ...tokens,
      user,
    };
  }

  @Mutation(() => Boolean)
  async loginBySms(@Args("data") { phoneNumber }: PhoneLoginInput) {
    const val = `${makeNumber(4)}`;
    console.log(val);
    const keyCache = phoneNumber;
    this.cacheManager.set(keyCache, val, 1000 * 60 * 2);

    this.smsService.sendCode(val, phoneNumber);
    return true;
  }

  @Mutation(() => Auth)
  async loginVerify(@Args("data") { phoneNumber, code }: PhoneCodeInput) {
    const keyCache = phoneNumber;

    const val = await this.cacheManager.get(keyCache);
    if (val != code) throw new ApolloError("Code is wrong");
    const userId = (await this.auth.getUserFromPhoneNumber(phoneNumber)).id;

    const { accessToken, refreshToken } = await this.auth.generateTokens({
      userId,
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  @Mutation(() => Token)
  async refreshToken(@Args() { token }: RefreshTokenInput) {
    return this.auth.refreshToken(token);
  }

  @ResolveField("user", () => PulseUser)
  async user(@Parent() auth: Auth) {
    return await this.auth.getUserFromToken(auth.accessToken);
  }
}
