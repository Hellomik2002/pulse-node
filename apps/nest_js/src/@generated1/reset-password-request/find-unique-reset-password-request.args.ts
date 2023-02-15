import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordRequestWhereUniqueInput } from './reset-password-request-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueResetPasswordRequestArgs {

    @Field(() => ResetPasswordRequestWhereUniqueInput, {nullable:false})
    @Type(() => ResetPasswordRequestWhereUniqueInput)
    where!: ResetPasswordRequestWhereUniqueInput;
}
