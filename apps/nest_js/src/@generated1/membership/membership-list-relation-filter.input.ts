import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipWhereInput } from './membership-where.input';

@InputType()
export class MembershipListRelationFilter {

    @Field(() => MembershipWhereInput, {nullable:true})
    every?: MembershipWhereInput;

    @Field(() => MembershipWhereInput, {nullable:true})
    some?: MembershipWhereInput;

    @Field(() => MembershipWhereInput, {nullable:true})
    none?: MembershipWhereInput;
}
