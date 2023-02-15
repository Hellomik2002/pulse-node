import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeCustomInputWhereUniqueInput } from './event-type-custom-input-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueEventTypeCustomInputArgs {

    @Field(() => EventTypeCustomInputWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeCustomInputWhereUniqueInput)
    where!: EventTypeCustomInputWhereUniqueInput;
}
