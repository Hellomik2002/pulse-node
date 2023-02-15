import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordRequestUpdateInput } from './reset-password-request-update.input';
import { Type } from 'class-transformer';
import { ResetPasswordRequestWhereUniqueInput } from './reset-password-request-where-unique.input';

@ArgsType()
export class UpdateOneResetPasswordRequestArgs {

    @Field(() => ResetPasswordRequestUpdateInput, {nullable:false})
    @Type(() => ResetPasswordRequestUpdateInput)
    data!: ResetPasswordRequestUpdateInput;

    @Field(() => ResetPasswordRequestWhereUniqueInput, {nullable:false})
    @Type(() => ResetPasswordRequestWhereUniqueInput)
    where!: ResetPasswordRequestWhereUniqueInput;
}
