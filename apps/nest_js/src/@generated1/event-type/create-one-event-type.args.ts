import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeCreateInput } from './event-type-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEventTypeArgs {

    @Field(() => EventTypeCreateInput, {nullable:false})
    @Type(() => EventTypeCreateInput)
    data!: EventTypeCreateInput;
}
