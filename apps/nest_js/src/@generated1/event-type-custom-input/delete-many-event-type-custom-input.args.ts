import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeCustomInputWhereInput } from './event-type-custom-input-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyEventTypeCustomInputArgs {

    @Field(() => EventTypeCustomInputWhereInput, {nullable:true})
    @Type(() => EventTypeCustomInputWhereInput)
    where?: EventTypeCustomInputWhereInput;
}
