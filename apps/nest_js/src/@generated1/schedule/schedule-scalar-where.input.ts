import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ScheduleScalarWhereInput {

    @Field(() => [ScheduleScalarWhereInput], {nullable:true})
    AND?: Array<ScheduleScalarWhereInput>;

    @Field(() => [ScheduleScalarWhereInput], {nullable:true})
    OR?: Array<ScheduleScalarWhereInput>;

    @Field(() => [ScheduleScalarWhereInput], {nullable:true})
    NOT?: Array<ScheduleScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    timeZone?: StringNullableFilter;
}
