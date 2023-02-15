import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ResetPasswordRequestCountAggregate } from './reset-password-request-count-aggregate.output';
import { ResetPasswordRequestMinAggregate } from './reset-password-request-min-aggregate.output';
import { ResetPasswordRequestMaxAggregate } from './reset-password-request-max-aggregate.output';

@ObjectType()
export class ResetPasswordRequestGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Date, {nullable:false})
    expires!: Date | string;

    @Field(() => ResetPasswordRequestCountAggregate, {nullable:true})
    _count?: ResetPasswordRequestCountAggregate;

    @Field(() => ResetPasswordRequestMinAggregate, {nullable:true})
    _min?: ResetPasswordRequestMinAggregate;

    @Field(() => ResetPasswordRequestMaxAggregate, {nullable:true})
    _max?: ResetPasswordRequestMaxAggregate;
}
