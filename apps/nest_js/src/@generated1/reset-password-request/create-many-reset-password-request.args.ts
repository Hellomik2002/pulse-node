import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordRequestCreateManyInput } from './reset-password-request-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyResetPasswordRequestArgs {

    @Field(() => [ResetPasswordRequestCreateManyInput], {nullable:false})
    @Type(() => ResetPasswordRequestCreateManyInput)
    data!: Array<ResetPasswordRequestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
