import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendeeUpdateManyMutationInput } from './attendee-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AttendeeWhereInput } from './attendee-where.input';

@ArgsType()
export class UpdateManyAttendeeArgs {

    @Field(() => AttendeeUpdateManyMutationInput, {nullable:false})
    @Type(() => AttendeeUpdateManyMutationInput)
    data!: AttendeeUpdateManyMutationInput;

    @Field(() => AttendeeWhereInput, {nullable:true})
    @Type(() => AttendeeWhereInput)
    where?: AttendeeWhereInput;
}
