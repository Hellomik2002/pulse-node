import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeCustomInputUpdateManyMutationInput } from './event-type-custom-input-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EventTypeCustomInputWhereInput } from './event-type-custom-input-where.input';

@ArgsType()
export class UpdateManyEventTypeCustomInputArgs {

    @Field(() => EventTypeCustomInputUpdateManyMutationInput, {nullable:false})
    @Type(() => EventTypeCustomInputUpdateManyMutationInput)
    data!: EventTypeCustomInputUpdateManyMutationInput;

    @Field(() => EventTypeCustomInputWhereInput, {nullable:true})
    @Type(() => EventTypeCustomInputWhereInput)
    where?: EventTypeCustomInputWhereInput;
}
