import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class SelectedCalendarWhereInput {

    @Field(() => [SelectedCalendarWhereInput], {nullable:true})
    AND?: Array<SelectedCalendarWhereInput>;

    @Field(() => [SelectedCalendarWhereInput], {nullable:true})
    OR?: Array<SelectedCalendarWhereInput>;

    @Field(() => [SelectedCalendarWhereInput], {nullable:true})
    NOT?: Array<SelectedCalendarWhereInput>;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    integration?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    externalId?: StringFilter;
}
