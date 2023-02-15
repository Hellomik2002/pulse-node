import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendeeUpdateInput } from './attendee-update.input';
import { Type } from 'class-transformer';
import { AttendeeWhereUniqueInput } from './attendee-where-unique.input';

@ArgsType()
export class UpdateOneAttendeeArgs {

    @Field(() => AttendeeUpdateInput, {nullable:false})
    @Type(() => AttendeeUpdateInput)
    data!: AttendeeUpdateInput;

    @Field(() => AttendeeWhereUniqueInput, {nullable:false})
    @Type(() => AttendeeWhereUniqueInput)
    where!: AttendeeWhereUniqueInput;
}
