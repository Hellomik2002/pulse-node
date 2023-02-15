import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesWhereUniqueInput } from './workflows-on-event-types-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowsOnEventTypesUpdateWithoutEventTypeInput } from './workflows-on-event-types-update-without-event-type.input';
import { WorkflowsOnEventTypesCreateWithoutEventTypeInput } from './workflows-on-event-types-create-without-event-type.input';

@InputType()
export class WorkflowsOnEventTypesUpsertWithWhereUniqueWithoutEventTypeInput {

    @Field(() => WorkflowsOnEventTypesWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesWhereUniqueInput)
    where!: WorkflowsOnEventTypesWhereUniqueInput;

    @Field(() => WorkflowsOnEventTypesUpdateWithoutEventTypeInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesUpdateWithoutEventTypeInput)
    update!: WorkflowsOnEventTypesUpdateWithoutEventTypeInput;

    @Field(() => WorkflowsOnEventTypesCreateWithoutEventTypeInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesCreateWithoutEventTypeInput)
    create!: WorkflowsOnEventTypesCreateWithoutEventTypeInput;
}
