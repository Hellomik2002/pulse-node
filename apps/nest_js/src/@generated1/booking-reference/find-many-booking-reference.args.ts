import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingReferenceWhereInput } from './booking-reference-where.input';
import { Type } from 'class-transformer';
import { BookingReferenceOrderByWithRelationInput } from './booking-reference-order-by-with-relation.input';
import { BookingReferenceWhereUniqueInput } from './booking-reference-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BookingReferenceScalarFieldEnum } from './booking-reference-scalar-field.enum';

@ArgsType()
export class FindManyBookingReferenceArgs {

    @Field(() => BookingReferenceWhereInput, {nullable:true})
    @Type(() => BookingReferenceWhereInput)
    where?: BookingReferenceWhereInput;

    @Field(() => [BookingReferenceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookingReferenceOrderByWithRelationInput>;

    @Field(() => BookingReferenceWhereUniqueInput, {nullable:true})
    cursor?: BookingReferenceWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BookingReferenceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BookingReferenceScalarFieldEnum>;
}
