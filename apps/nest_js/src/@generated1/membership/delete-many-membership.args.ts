import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipWhereInput } from './membership-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMembershipArgs {

    @Field(() => MembershipWhereInput, {nullable:true})
    @Type(() => MembershipWhereInput)
    where?: MembershipWhereInput;
}
