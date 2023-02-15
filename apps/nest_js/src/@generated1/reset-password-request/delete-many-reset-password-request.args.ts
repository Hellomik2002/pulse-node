import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordRequestWhereInput } from './reset-password-request-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyResetPasswordRequestArgs {

    @Field(() => ResetPasswordRequestWhereInput, {nullable:true})
    @Type(() => ResetPasswordRequestWhereInput)
    where?: ResetPasswordRequestWhereInput;
}
