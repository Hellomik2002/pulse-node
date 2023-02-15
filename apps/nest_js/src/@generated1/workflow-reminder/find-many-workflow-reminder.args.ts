import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkflowReminderWhereInput } from './workflow-reminder-where.input';
import { Type } from 'class-transformer';
import { WorkflowReminderOrderByWithRelationInput } from './workflow-reminder-order-by-with-relation.input';
import { WorkflowReminderWhereUniqueInput } from './workflow-reminder-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkflowReminderScalarFieldEnum } from './workflow-reminder-scalar-field.enum';

@ArgsType()
export class FindManyWorkflowReminderArgs {

    @Field(() => WorkflowReminderWhereInput, {nullable:true})
    @Type(() => WorkflowReminderWhereInput)
    where?: WorkflowReminderWhereInput;

    @Field(() => [WorkflowReminderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WorkflowReminderOrderByWithRelationInput>;

    @Field(() => WorkflowReminderWhereUniqueInput, {nullable:true})
    cursor?: WorkflowReminderWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WorkflowReminderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WorkflowReminderScalarFieldEnum>;
}
