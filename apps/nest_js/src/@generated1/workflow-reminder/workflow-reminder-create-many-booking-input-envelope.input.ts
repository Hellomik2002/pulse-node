import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowReminderCreateManyBookingInput } from './workflow-reminder-create-many-booking.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkflowReminderCreateManyBookingInputEnvelope {

    @Field(() => [WorkflowReminderCreateManyBookingInput], {nullable:false})
    @Type(() => WorkflowReminderCreateManyBookingInput)
    data!: Array<WorkflowReminderCreateManyBookingInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
