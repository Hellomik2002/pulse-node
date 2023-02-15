import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateNestedOneWithoutCustomInputsInput } from '../event-type/event-type-create-nested-one-without-custom-inputs.input';
import { EventTypeCustomInputType } from '../prisma/event-type-custom-input-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class EventTypeCustomInputCreateInput {

    @Field(() => EventTypeCreateNestedOneWithoutCustomInputsInput, {nullable:false})
    eventType!: EventTypeCreateNestedOneWithoutCustomInputsInput;

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => EventTypeCustomInputType, {nullable:false})
    type!: keyof typeof EventTypeCustomInputType;

    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;

    @Field(() => Boolean, {nullable:false})
    required!: boolean;

    @Field(() => String, {nullable:true})
    placeholder?: string;
}
