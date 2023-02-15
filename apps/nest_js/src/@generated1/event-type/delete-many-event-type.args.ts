import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeWhereInput } from './event-type-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyEventTypeArgs {

    @Field(() => EventTypeWhereInput, {nullable:true})
    @Type(() => EventTypeWhereInput)
    where?: EventTypeWhereInput;
}
