import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeUpdateWithoutUsersInput } from './event-type-update-without-users.input';

@InputType()
export class EventTypeUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutUsersInput, {nullable:false})
    @Type(() => EventTypeUpdateWithoutUsersInput)
    data!: EventTypeUpdateWithoutUsersInput;
}
