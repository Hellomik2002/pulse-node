import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeUpdateManyMutationInput } from './event-type-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EventTypeWhereInput } from './event-type-where.input';

@ArgsType()
export class UpdateManyEventTypeArgs {

    @Field(() => EventTypeUpdateManyMutationInput, {nullable:false})
    @Type(() => EventTypeUpdateManyMutationInput)
    data!: EventTypeUpdateManyMutationInput;

    @Field(() => EventTypeWhereInput, {nullable:true})
    @Type(() => EventTypeWhereInput)
    where?: EventTypeWhereInput;
}
