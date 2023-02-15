import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeUpdateWithoutWorkflowsInput } from './event-type-update-without-workflows.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutWorkflowsInput } from './event-type-create-without-workflows.input';

@InputType()
export class EventTypeUpsertWithoutWorkflowsInput {

    @Field(() => EventTypeUpdateWithoutWorkflowsInput, {nullable:false})
    @Type(() => EventTypeUpdateWithoutWorkflowsInput)
    update!: EventTypeUpdateWithoutWorkflowsInput;

    @Field(() => EventTypeCreateWithoutWorkflowsInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutWorkflowsInput)
    create!: EventTypeCreateWithoutWorkflowsInput;
}
