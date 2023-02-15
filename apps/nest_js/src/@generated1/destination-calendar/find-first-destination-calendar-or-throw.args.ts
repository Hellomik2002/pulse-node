import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DestinationCalendarWhereInput } from './destination-calendar-where.input';
import { Type } from 'class-transformer';
import { DestinationCalendarOrderByWithRelationInput } from './destination-calendar-order-by-with-relation.input';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DestinationCalendarScalarFieldEnum } from './destination-calendar-scalar-field.enum';

@ArgsType()
export class FindFirstDestinationCalendarOrThrowArgs {

    @Field(() => DestinationCalendarWhereInput, {nullable:true})
    @Type(() => DestinationCalendarWhereInput)
    where?: DestinationCalendarWhereInput;

    @Field(() => [DestinationCalendarOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DestinationCalendarOrderByWithRelationInput>;

    @Field(() => DestinationCalendarWhereUniqueInput, {nullable:true})
    cursor?: DestinationCalendarWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DestinationCalendarScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DestinationCalendarScalarFieldEnum>;
}
