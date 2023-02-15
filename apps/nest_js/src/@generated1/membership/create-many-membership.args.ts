import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipCreateManyInput } from './membership-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMembershipArgs {

    @Field(() => [MembershipCreateManyInput], {nullable:false})
    @Type(() => MembershipCreateManyInput)
    data!: Array<MembershipCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
