import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesWhereUniqueInput } from './workflows-on-event-types-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowsOnEventTypesCreateWithoutEventTypeInput } from './workflows-on-event-types-create-without-event-type.input';

@InputType()
export class WorkflowsOnEventTypesCreateOrConnectWithoutEventTypeInput {

    @Field(() => WorkflowsOnEventTypesWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesWhereUniqueInput)
    where!: WorkflowsOnEventTypesWhereUniqueInput;

    @Field(() => WorkflowsOnEventTypesCreateWithoutEventTypeInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesCreateWithoutEventTypeInput)
    create!: WorkflowsOnEventTypesCreateWithoutEventTypeInput;
}
