import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipWhereUniqueInput } from './membership-where-unique.input';
import { Type } from 'class-transformer';
import { MembershipUpdateWithoutUserInput } from './membership-update-without-user.input';
import { MembershipCreateWithoutUserInput } from './membership-create-without-user.input';

@InputType()
export class MembershipUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => MembershipWhereUniqueInput, {nullable:false})
    @Type(() => MembershipWhereUniqueInput)
    where!: MembershipWhereUniqueInput;

    @Field(() => MembershipUpdateWithoutUserInput, {nullable:false})
    @Type(() => MembershipUpdateWithoutUserInput)
    update!: MembershipUpdateWithoutUserInput;

    @Field(() => MembershipCreateWithoutUserInput, {nullable:false})
    @Type(() => MembershipCreateWithoutUserInput)
    create!: MembershipCreateWithoutUserInput;
}
