import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeScalarWhereInput } from './event-type-scalar-where.input';
import { Type } from 'class-transformer';
import { EventTypeUpdateManyMutationInput } from './event-type-update-many-mutation.input';

@InputType()
export class EventTypeUpdateManyWithWhereWithoutTeamInput {

    @Field(() => EventTypeScalarWhereInput, {nullable:false})
    @Type(() => EventTypeScalarWhereInput)
    where!: EventTypeScalarWhereInput;

    @Field(() => EventTypeUpdateManyMutationInput, {nullable:false})
    @Type(() => EventTypeUpdateManyMutationInput)
    data!: EventTypeUpdateManyMutationInput;
}
