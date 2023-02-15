import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendeeScalarWhereInput } from './attendee-scalar-where.input';
import { Type } from 'class-transformer';
import { AttendeeUpdateManyMutationInput } from './attendee-update-many-mutation.input';

@InputType()
export class AttendeeUpdateManyWithWhereWithoutBookingInput {

    @Field(() => AttendeeScalarWhereInput, {nullable:false})
    @Type(() => AttendeeScalarWhereInput)
    where!: AttendeeScalarWhereInput;

    @Field(() => AttendeeUpdateManyMutationInput, {nullable:false})
    @Type(() => AttendeeUpdateManyMutationInput)
    data!: AttendeeUpdateManyMutationInput;
}
