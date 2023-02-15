import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ResetPasswordRequestScalarWhereWithAggregatesInput {

    @Field(() => [ResetPasswordRequestScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ResetPasswordRequestScalarWhereWithAggregatesInput>;

    @Field(() => [ResetPasswordRequestScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ResetPasswordRequestScalarWhereWithAggregatesInput>;

    @Field(() => [ResetPasswordRequestScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ResetPasswordRequestScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expires?: DateTimeWithAggregatesFilter;
}
