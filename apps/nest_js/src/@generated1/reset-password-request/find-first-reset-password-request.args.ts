import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordRequestWhereInput } from './reset-password-request-where.input';
import { Type } from 'class-transformer';
import { ResetPasswordRequestOrderByWithRelationInput } from './reset-password-request-order-by-with-relation.input';
import { ResetPasswordRequestWhereUniqueInput } from './reset-password-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ResetPasswordRequestScalarFieldEnum } from './reset-password-request-scalar-field.enum';

@ArgsType()
export class FindFirstResetPasswordRequestArgs {

    @Field(() => ResetPasswordRequestWhereInput, {nullable:true})
    @Type(() => ResetPasswordRequestWhereInput)
    where?: ResetPasswordRequestWhereInput;

    @Field(() => [ResetPasswordRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ResetPasswordRequestOrderByWithRelationInput>;

    @Field(() => ResetPasswordRequestWhereUniqueInput, {nullable:true})
    cursor?: ResetPasswordRequestWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ResetPasswordRequestScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ResetPasswordRequestScalarFieldEnum>;
}
