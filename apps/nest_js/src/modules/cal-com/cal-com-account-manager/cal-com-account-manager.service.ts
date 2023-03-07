import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PasswordService } from "src/auth/services/password.service";

import { CalComAccountSignUpDto } from "./dto/createCalAccountDto";

@Injectable()
export class CalComAccountManagerService {
  // inject the config service here
  constructor(
    private readonly configService: ConfigService,
    private readonly passwordService: PasswordService,
    private readonly axios: HttpService
  ) {}

  // create a function to get the API key
  createCalAccount(dto: CalComAccountSignUpDto): Promise<any> {
    const calcomAppUrl = this.configService.get("CAL_COM_APP_URL");
    const calComApi = calcomAppUrl + "/api/auth/signup";
    console.log(calComApi);

    return this.axios
      .post(calComApi, {
        ...dto,
      })
      .toPromise();
  }
}
