import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordRequestWhereUniqueInput } from './reset-password-request-where-unique.input';
import { Type } from 'class-transformer';
import { ResetPasswordRequestCreateInput } from './reset-password-request-create.input';
import { ResetPasswordRequestUpdateInput } from './reset-password-request-update.input';

@ArgsType()
export class UpsertOneResetPasswordRequestArgs {

    @Field(() => ResetPasswordRequestWhereUniqueInput, {nullable:false})
    @Type(() => ResetPasswordRequestWhereUniqueInput)
    where!: ResetPasswordRequestWhereUniqueInput;

    @Field(() => ResetPasswordRequestCreateInput, {nullable:false})
    @Type(() => ResetPasswordRequestCreateInput)
    create!: ResetPasswordRequestCreateInput;

    @Field(() => ResetPasswordRequestUpdateInput, {nullable:false})
    @Type(() => ResetPasswordRequestUpdateInput)
    update!: ResetPasswordRequestUpdateInput;
}
