import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendeeWhereUniqueInput } from './attendee-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAttendeeOrThrowArgs {

    @Field(() => AttendeeWhereUniqueInput, {nullable:false})
    @Type(() => AttendeeWhereUniqueInput)
    where!: AttendeeWhereUniqueInput;
}
