import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ImpersonationsSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    impersonatedUserId?: true;

    @Field(() => Boolean, {nullable:true})
    impersonatedById?: true;
}
