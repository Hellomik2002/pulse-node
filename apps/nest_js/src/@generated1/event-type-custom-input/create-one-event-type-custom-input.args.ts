import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeCustomInputCreateInput } from './event-type-custom-input-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEventTypeCustomInputArgs {

    @Field(() => EventTypeCustomInputCreateInput, {nullable:false})
    @Type(() => EventTypeCustomInputCreateInput)
    data!: EventTypeCustomInputCreateInput;
}
