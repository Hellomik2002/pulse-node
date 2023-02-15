import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendeeWhereUniqueInput } from './attendee-where-unique.input';
import { Type } from 'class-transformer';
import { AttendeeCreateInput } from './attendee-create.input';
import { AttendeeUpdateInput } from './attendee-update.input';

@ArgsType()
export class UpsertOneAttendeeArgs {

    @Field(() => AttendeeWhereUniqueInput, {nullable:false})
    @Type(() => AttendeeWhereUniqueInput)
    where!: AttendeeWhereUniqueInput;

    @Field(() => AttendeeCreateInput, {nullable:false})
    @Type(() => AttendeeCreateInput)
    create!: AttendeeCreateInput;

    @Field(() => AttendeeUpdateInput, {nullable:false})
    @Type(() => AttendeeUpdateInput)
    update!: AttendeeUpdateInput;
}
