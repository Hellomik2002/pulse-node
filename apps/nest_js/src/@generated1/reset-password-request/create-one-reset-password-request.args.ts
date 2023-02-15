import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordRequestCreateInput } from './reset-password-request-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneResetPasswordRequestArgs {

    @Field(() => ResetPasswordRequestCreateInput, {nullable:false})
    @Type(() => ResetPasswordRequestCreateInput)
    data!: ResetPasswordRequestCreateInput;
}
