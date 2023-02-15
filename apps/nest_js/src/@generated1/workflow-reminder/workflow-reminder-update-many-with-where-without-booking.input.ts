import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowReminderScalarWhereInput } from './workflow-reminder-scalar-where.input';
import { Type } from 'class-transformer';
import { WorkflowReminderUpdateManyMutationInput } from './workflow-reminder-update-many-mutation.input';

@InputType()
export class WorkflowReminderUpdateManyWithWhereWithoutBookingInput {

    @Field(() => WorkflowReminderScalarWhereInput, {nullable:false})
    @Type(() => WorkflowReminderScalarWhereInput)
    where!: WorkflowReminderScalarWhereInput;

    @Field(() => WorkflowReminderUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkflowReminderUpdateManyMutationInput)
    data!: WorkflowReminderUpdateManyMutationInput;
}
