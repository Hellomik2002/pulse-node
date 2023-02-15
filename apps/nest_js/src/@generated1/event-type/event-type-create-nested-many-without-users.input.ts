import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutUsersInput } from './event-type-create-without-users.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutUsersInput } from './event-type-create-or-connect-without-users.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';

@InputType()
export class EventTypeCreateNestedManyWithoutUsersInput {

    @Field(() => [EventTypeCreateWithoutUsersInput], {nullable:true})
    @Type(() => EventTypeCreateWithoutUsersInput)
    create?: Array<EventTypeCreateWithoutUsersInput>;

    @Field(() => [EventTypeCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<EventTypeCreateOrConnectWithoutUsersInput>;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: Array<EventTypeWhereUniqueInput>;
}
