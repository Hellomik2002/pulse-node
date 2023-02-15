import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutCustomInputsInput } from './event-type-create-without-custom-inputs.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutCustomInputsInput } from './event-type-create-or-connect-without-custom-inputs.input';
import { EventTypeUpsertWithoutCustomInputsInput } from './event-type-upsert-without-custom-inputs.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { EventTypeUpdateWithoutCustomInputsInput } from './event-type-update-without-custom-inputs.input';

@InputType()
export class EventTypeUpdateOneRequiredWithoutCustomInputsNestedInput {

    @Field(() => EventTypeCreateWithoutCustomInputsInput, {nullable:true})
    @Type(() => EventTypeCreateWithoutCustomInputsInput)
    create?: EventTypeCreateWithoutCustomInputsInput;

    @Field(() => EventTypeCreateOrConnectWithoutCustomInputsInput, {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutCustomInputsInput)
    connectOrCreate?: EventTypeCreateOrConnectWithoutCustomInputsInput;

    @Field(() => EventTypeUpsertWithoutCustomInputsInput, {nullable:true})
    @Type(() => EventTypeUpsertWithoutCustomInputsInput)
    upsert?: EventTypeUpsertWithoutCustomInputsInput;

    @Field(() => EventTypeWhereUniqueInput, {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutCustomInputsInput, {nullable:true})
    @Type(() => EventTypeUpdateWithoutCustomInputsInput)
    update?: EventTypeUpdateWithoutCustomInputsInput;
}
