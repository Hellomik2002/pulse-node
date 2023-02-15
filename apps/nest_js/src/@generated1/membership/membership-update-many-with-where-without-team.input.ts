import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipScalarWhereInput } from './membership-scalar-where.input';
import { Type } from 'class-transformer';
import { MembershipUpdateManyMutationInput } from './membership-update-many-mutation.input';

@InputType()
export class MembershipUpdateManyWithWhereWithoutTeamInput {

    @Field(() => MembershipScalarWhereInput, {nullable:false})
    @Type(() => MembershipScalarWhereInput)
    where!: MembershipScalarWhereInput;

    @Field(() => MembershipUpdateManyMutationInput, {nullable:false})
    @Type(() => MembershipUpdateManyMutationInput)
    data!: MembershipUpdateManyMutationInput;
}
