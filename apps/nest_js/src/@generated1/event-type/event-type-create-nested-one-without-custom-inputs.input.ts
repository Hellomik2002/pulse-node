import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutCustomInputsInput } from './event-type-create-without-custom-inputs.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutCustomInputsInput } from './event-type-create-or-connect-without-custom-inputs.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';

@InputType()
export class EventTypeCreateNestedOneWithoutCustomInputsInput {

    @Field(() => EventTypeCreateWithoutCustomInputsInput, {nullable:true})
    @Type(() => EventTypeCreateWithoutCustomInputsInput)
    create?: EventTypeCreateWithoutCustomInputsInput;

    @Field(() => EventTypeCreateOrConnectWithoutCustomInputsInput, {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutCustomInputsInput)
    connectOrCreate?: EventTypeCreateOrConnectWithoutCustomInputsInput;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: EventTypeWhereUniqueInput;
}
