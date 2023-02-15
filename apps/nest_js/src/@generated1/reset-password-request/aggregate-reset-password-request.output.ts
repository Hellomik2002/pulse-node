import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ResetPasswordRequestCountAggregate } from './reset-password-request-count-aggregate.output';
import { ResetPasswordRequestMinAggregate } from './reset-password-request-min-aggregate.output';
import { ResetPasswordRequestMaxAggregate } from './reset-password-request-max-aggregate.output';

@ObjectType()
export class AggregateResetPasswordRequest {

    @Field(() => ResetPasswordRequestCountAggregate, {nullable:true})
    _count?: ResetPasswordRequestCountAggregate;

    @Field(() => ResetPasswordRequestMinAggregate, {nullable:true})
    _min?: ResetPasswordRequestMinAggregate;

    @Field(() => ResetPasswordRequestMaxAggregate, {nullable:true})
    _max?: ResetPasswordRequestMaxAggregate;
}
