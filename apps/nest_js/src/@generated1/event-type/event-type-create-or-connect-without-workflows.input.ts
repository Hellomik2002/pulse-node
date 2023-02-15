import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutWorkflowsInput } from './event-type-create-without-workflows.input';

@InputType()
export class EventTypeCreateOrConnectWithoutWorkflowsInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeCreateWithoutWorkflowsInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutWorkflowsInput)
    create!: EventTypeCreateWithoutWorkflowsInput;
}
