import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesWhereUniqueInput } from './workflows-on-event-types-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowsOnEventTypesUpdateWithoutEventTypeInput } from './workflows-on-event-types-update-without-event-type.input';

@InputType()
export class WorkflowsOnEventTypesUpdateWithWhereUniqueWithoutEventTypeInput {

    @Field(() => WorkflowsOnEventTypesWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesWhereUniqueInput)
    where!: WorkflowsOnEventTypesWhereUniqueInput;

    @Field(() => WorkflowsOnEventTypesUpdateWithoutEventTypeInput, {nullable:false})
    @Type(() => WorkflowsOnEventTypesUpdateWithoutEventTypeInput)
    data!: WorkflowsOnEventTypesUpdateWithoutEventTypeInput;
}
