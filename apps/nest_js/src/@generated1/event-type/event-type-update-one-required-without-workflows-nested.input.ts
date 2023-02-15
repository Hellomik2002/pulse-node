import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutWorkflowsInput } from './event-type-create-without-workflows.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutWorkflowsInput } from './event-type-create-or-connect-without-workflows.input';
import { EventTypeUpsertWithoutWorkflowsInput } from './event-type-upsert-without-workflows.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { EventTypeUpdateWithoutWorkflowsInput } from './event-type-update-without-workflows.input';

@InputType()
export class EventTypeUpdateOneRequiredWithoutWorkflowsNestedInput {

    @Field(() => EventTypeCreateWithoutWorkflowsInput, {nullable:true})
    @Type(() => EventTypeCreateWithoutWorkflowsInput)
    create?: EventTypeCreateWithoutWorkflowsInput;

    @Field(() => EventTypeCreateOrConnectWithoutWorkflowsInput, {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutWorkflowsInput)
    connectOrCreate?: EventTypeCreateOrConnectWithoutWorkflowsInput;

    @Field(() => EventTypeUpsertWithoutWorkflowsInput, {nullable:true})
    @Type(() => EventTypeUpsertWithoutWorkflowsInput)
    upsert?: EventTypeUpsertWithoutWorkflowsInput;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutWorkflowsInput, {nullable:true})
    @Type(() => EventTypeUpdateWithoutWorkflowsInput)
    update?: EventTypeUpdateWithoutWorkflowsInput;
}
