import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendeeWhereInput } from './attendee-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAttendeeArgs {

    @Field(() => AttendeeWhereInput, {nullable:true})
    @Type(() => AttendeeWhereInput)
    where?: AttendeeWhereInput;
}
