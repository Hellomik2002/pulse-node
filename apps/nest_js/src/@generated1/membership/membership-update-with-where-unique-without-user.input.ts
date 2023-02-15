import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipWhereUniqueInput } from './membership-where-unique.input';
import { Type } from 'class-transformer';
import { MembershipUpdateWithoutUserInput } from './membership-update-without-user.input';

@InputType()
export class MembershipUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => MembershipWhereUniqueInput, {nullable:false})
    @Type(() => MembershipWhereUniqueInput)
    where!: MembershipWhereUniqueInput;

    @Field(() => MembershipUpdateWithoutUserInput, {nullable:false})
    @Type(() => MembershipUpdateWithoutUserInput)
    data!: MembershipUpdateWithoutUserInput;
}
