import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipWhereInput } from './membership-where.input';
import { Type } from 'class-transformer';
import { MembershipOrderByWithRelationInput } from './membership-order-by-with-relation.input';
import { MembershipWhereUniqueInput } from './membership-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MembershipScalarFieldEnum } from './membership-scalar-field.enum';

@ArgsType()
export class FindFirstMembershipOrThrowArgs {

    @Field(() => MembershipWhereInput, {nullable:true})
    @Type(() => MembershipWhereInput)
    where?: MembershipWhereInput;

    @Field(() => [MembershipOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MembershipOrderByWithRelationInput>;

    @Field(() => MembershipWhereUniqueInput, {nullable:true})
    cursor?: MembershipWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MembershipScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MembershipScalarFieldEnum>;
}
