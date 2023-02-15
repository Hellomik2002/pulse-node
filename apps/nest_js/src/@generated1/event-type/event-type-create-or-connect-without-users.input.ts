import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { Type } from 'class-transformer';
import { EventTypeCreateWithoutUsersInput } from './event-type-create-without-users.input';

@InputType()
export class EventTypeCreateOrConnectWithoutUsersInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    @Type(() => EventTypeWhereUniqueInput)
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeCreateWithoutUsersInput, {nullable:false})
    @Type(() => EventTypeCreateWithoutUsersInput)
    create!: EventTypeCreateWithoutUsersInput;
}
