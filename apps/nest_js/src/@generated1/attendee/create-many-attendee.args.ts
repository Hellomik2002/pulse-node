import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendeeCreateManyInput } from './attendee-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAttendeeArgs {

    @Field(() => [AttendeeCreateManyInput], {nullable:false})
    @Type(() => AttendeeCreateManyInput)
    data!: Array<AttendeeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
