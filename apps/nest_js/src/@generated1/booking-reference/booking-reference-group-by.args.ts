import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingReferenceWhereInput } from './booking-reference-where.input';
import { Type } from 'class-transformer';
import { BookingReferenceOrderByWithAggregationInput } from './booking-reference-order-by-with-aggregation.input';
import { BookingReferenceScalarFieldEnum } from './booking-reference-scalar-field.enum';
import { BookingReferenceScalarWhereWithAggregatesInput } from './booking-reference-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BookingReferenceCountAggregateInput } from './booking-reference-count-aggregate.input';
import { BookingReferenceAvgAggregateInput } from './booking-reference-avg-aggregate.input';
import { BookingReferenceSumAggregateInput } from './booking-reference-sum-aggregate.input';
import { BookingReferenceMinAggregateInput } from './booking-reference-min-aggregate.input';
import { BookingReferenceMaxAggregateInput } from './booking-reference-max-aggregate.input';

@ArgsType()
export class BookingReferenceGroupByArgs {

    @Field(() => BookingReferenceWhereInput, {nullable:true})
    @Type(() => BookingReferenceWhereInput)
    where?: BookingReferenceWhereInput;

    @Field(() => [BookingReferenceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BookingReferenceOrderByWithAggregationInput>;

    @Field(() => [BookingReferenceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BookingReferenceScalarFieldEnum>;

    @Field(() => BookingReferenceScalarWhereWithAggregatesInput, {nullable:true})
    having?: BookingReferenceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BookingReferenceCountAggregateInput, {nullable:true})
    _count?: BookingReferenceCountAggregateInput;

    @Field(() => BookingReferenceAvgAggregateInput, {nullable:true})
    _avg?: BookingReferenceAvgAggregateInput;

    @Field(() => BookingReferenceSumAggregateInput, {nullable:true})
    _sum?: BookingReferenceSumAggregateInput;

    @Field(() => BookingReferenceMinAggregateInput, {nullable:true})
    _min?: BookingReferenceMinAggregateInput;

    @Field(() => BookingReferenceMaxAggregateInput, {nullable:true})
    _max?: BookingReferenceMaxAggregateInput;
}
