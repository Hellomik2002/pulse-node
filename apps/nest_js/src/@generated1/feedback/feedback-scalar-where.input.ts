import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class FeedbackScalarWhereInput {

    @Field(() => [FeedbackScalarWhereInput], {nullable:true})
    AND?: Array<FeedbackScalarWhereInput>;

    @Field(() => [FeedbackScalarWhereInput], {nullable:true})
    OR?: Array<FeedbackScalarWhereInput>;

    @Field(() => [FeedbackScalarWhereInput], {nullable:true})
    NOT?: Array<FeedbackScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    rating?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    comment?: StringNullableFilter;
}
