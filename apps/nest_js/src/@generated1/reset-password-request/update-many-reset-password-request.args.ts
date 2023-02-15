import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordRequestUpdateManyMutationInput } from './reset-password-request-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ResetPasswordRequestWhereInput } from './reset-password-request-where.input';

@ArgsType()
export class UpdateManyResetPasswordRequestArgs {

    @Field(() => ResetPasswordRequestUpdateManyMutationInput, {nullable:false})
    @Type(() => ResetPasswordRequestUpdateManyMutationInput)
    data!: ResetPasswordRequestUpdateManyMutationInput;

    @Field(() => ResetPasswordRequestWhereInput, {nullable:true})
    @Type(() => ResetPasswordRequestWhereInput)
    where?: ResetPasswordRequestWhereInput;
}
