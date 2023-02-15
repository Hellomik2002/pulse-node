import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeCustomInputCreateManyInput } from './event-type-custom-input-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEventTypeCustomInputArgs {

    @Field(() => [EventTypeCustomInputCreateManyInput], {nullable:false})
    @Type(() => EventTypeCustomInputCreateManyInput)
    data!: Array<EventTypeCustomInputCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
