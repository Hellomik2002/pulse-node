import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingReferenceWhereInput } from './booking-reference-where.input';

@InputType()
export class BookingReferenceListRelationFilter {

    @Field(() => BookingReferenceWhereInput, {nullable:true})
    every?: BookingReferenceWhereInput;

    @Field(() => BookingReferenceWhereInput, {nullable:true})
    some?: BookingReferenceWhereInput;

    @Field(() => BookingReferenceWhereInput, {nullable:true})
    none?: BookingReferenceWhereInput;
}
