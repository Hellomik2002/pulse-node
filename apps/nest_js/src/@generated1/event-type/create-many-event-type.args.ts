import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeCreateManyInput } from './event-type-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEventTypeArgs {

    @Field(() => [EventTypeCreateManyInput], {nullable:false})
    @Type(() => EventTypeCreateManyInput)
    data!: Array<EventTypeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
