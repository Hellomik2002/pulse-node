import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendeeCreateInput } from './attendee-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAttendeeArgs {

    @Field(() => AttendeeCreateInput, {nullable:false})
    @Type(() => AttendeeCreateInput)
    data!: AttendeeCreateInput;
}
