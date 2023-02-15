import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerifiedNumberWhereUniqueInput } from './verified-number-where-unique.input';
import { Type } from 'class-transformer';
import { VerifiedNumberCreateWithoutUserInput } from './verified-number-create-without-user.input';

@InputType()
export class VerifiedNumberCreateOrConnectWithoutUserInput {

    @Field(() => VerifiedNumberWhereUniqueInput, {nullable:false})
    @Type(() => VerifiedNumberWhereUniqueInput)
    where!: VerifiedNumberWhereUniqueInput;

    @Field(() => VerifiedNumberCreateWithoutUserInput, {nullable:false})
    @Type(() => VerifiedNumberCreateWithoutUserInput)
    create!: VerifiedNumberCreateWithoutUserInput;
}
