import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipWhereUniqueInput } from './membership-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMembershipOrThrowArgs {

    @Field(() => MembershipWhereUniqueInput, {nullable:false})
    @Type(() => MembershipWhereUniqueInput)
    where!: MembershipWhereUniqueInput;
}
