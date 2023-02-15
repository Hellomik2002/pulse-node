import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumWorkflowTriggerEventsFilter } from '../prisma/enum-workflow-trigger-events-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumTimeUnitNullableFilter } from '../prisma/enum-time-unit-nullable-filter.input';

@InputType()
export class WorkflowScalarWhereInput {

    @Field(() => [WorkflowScalarWhereInput], {nullable:true})
    AND?: Array<WorkflowScalarWhereInput>;

    @Field(() => [WorkflowScalarWhereInput], {nullable:true})
    OR?: Array<WorkflowScalarWhereInput>;

    @Field(() => [WorkflowScalarWhereInput], {nullable:true})
    NOT?: Array<WorkflowScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => EnumWorkflowTriggerEventsFilter, {nullable:true})
    trigger?: EnumWorkflowTriggerEventsFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    time?: IntNullableFilter;

    @Field(() => EnumTimeUnitNullableFilter, {nullable:true})
    timeUnit?: EnumTimeUnitNullableFilter;
}
