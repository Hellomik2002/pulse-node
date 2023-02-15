import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class VerifiedNumberWhereInput {

    @Field(() => [VerifiedNumberWhereInput], {nullable:true})
    AND?: Array<VerifiedNumberWhereInput>;

    @Field(() => [VerifiedNumberWhereInput], {nullable:true})
    OR?: Array<VerifiedNumberWhereInput>;

    @Field(() => [VerifiedNumberWhereInput], {nullable:true})
    NOT?: Array<VerifiedNumberWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: StringFilter;
}
