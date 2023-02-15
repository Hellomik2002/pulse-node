import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipWhereUniqueInput } from './membership-where-unique.input';
import { Type } from 'class-transformer';
import { MembershipCreateWithoutUserInput } from './membership-create-without-user.input';

@InputType()
export class MembershipCreateOrConnectWithoutUserInput {

    @Field(() => MembershipWhereUniqueInput, {nullable:false})
    @Type(() => MembershipWhereUniqueInput)
    where!: MembershipWhereUniqueInput;

    @Field(() => MembershipCreateWithoutUserInput, {nullable:false})
    @Type(() => MembershipCreateWithoutUserInput)
    create!: MembershipCreateWithoutUserInput;
}
