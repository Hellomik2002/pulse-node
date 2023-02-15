import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCustomInputScalarWhereInput } from './event-type-custom-input-scalar-where.input';
import { Type } from 'class-transformer';
import { EventTypeCustomInputUpdateManyMutationInput } from './event-type-custom-input-update-many-mutation.input';

@InputType()
export class EventTypeCustomInputUpdateManyWithWhereWithoutEventTypeInput {

    @Field(() => EventTypeCustomInputScalarWhereInput, {nullable:false})
    @Type(() => EventTypeCustomInputScalarWhereInput)
    where!: EventTypeCustomInputScalarWhereInput;

    @Field(() => EventTypeCustomInputUpdateManyMutationInput, {nullable:false})
    @Type(() => EventTypeCustomInputUpdateManyMutationInput)
    data!: EventTypeCustomInputUpdateManyMutationInput;
}
