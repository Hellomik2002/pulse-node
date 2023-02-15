import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutWorkflowsInput } from './event-type-create-without-workflows.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutWorkflowsInput } from './event-type-create-or-connect-without-workflows.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';

@InputType()
export class EventTypeCreateNestedOneWithoutWorkflowsInput {

    @Field(() => EventTypeCreateWithoutWorkflowsInput, {nullable:true})
    @Type(() => EventTypeCreateWithoutWorkflowsInput)
    create?: EventTypeCreateWithoutWorkflowsInput;

    @Field(() => EventTypeCreateOrConnectWithoutWorkflowsInput, {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutWorkflowsInput)
    connectOrCreate?: EventTypeCreateOrConnectWithoutWorkflowsInput;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: EventTypeWhereUniqueInput;
}
