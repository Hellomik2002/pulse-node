import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateManyEventTypeInput } from './booking-create-many-event-type.input';
import { Type } from 'class-transformer';

@InputType()
export class BookingCreateManyEventTypeInputEnvelope {

    @Field(() => [BookingCreateManyEventTypeInput], {nullable:false})
    @Type(() => BookingCreateManyEventTypeInput)
    data!: Array<BookingCreateManyEventTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
