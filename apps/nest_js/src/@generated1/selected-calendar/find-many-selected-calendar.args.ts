import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SelectedCalendarWhereInput } from './selected-calendar-where.input';
import { Type } from 'class-transformer';
import { SelectedCalendarOrderByWithRelationInput } from './selected-calendar-order-by-with-relation.input';
import { SelectedCalendarWhereUniqueInput } from './selected-calendar-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SelectedCalendarScalarFieldEnum } from './selected-calendar-scalar-field.enum';

@ArgsType()
export class FindManySelectedCalendarArgs {

    @Field(() => SelectedCalendarWhereInput, {nullable:true})
    @Type(() => SelectedCalendarWhereInput)
    where?: SelectedCalendarWhereInput;

    @Field(() => [SelectedCalendarOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SelectedCalendarOrderByWithRelationInput>;

    @Field(() => SelectedCalendarWhereUniqueInput, {nullable:true})
    cursor?: SelectedCalendarWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SelectedCalendarScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SelectedCalendarScalarFieldEnum>;
}
