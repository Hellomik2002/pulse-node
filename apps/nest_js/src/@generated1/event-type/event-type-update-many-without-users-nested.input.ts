import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutUsersInput } from './event-type-create-without-users.input';
import { Type } from 'class-transformer';
import { EventTypeCreateOrConnectWithoutUsersInput } from './event-type-create-or-connect-without-users.input';
import { EventTypeUpsertWithWhereUniqueWithoutUsersInput } from './event-type-upsert-with-where-unique-without-users.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { EventTypeUpdateWithWhereUniqueWithoutUsersInput } from './event-type-update-with-where-unique-without-users.input';
import { EventTypeUpdateManyWithWhereWithoutUsersInput } from './event-type-update-many-with-where-without-users.input';
import { EventTypeScalarWhereInput } from './event-type-scalar-where.input';

@InputType()
export class EventTypeUpdateManyWithoutUsersNestedInput {

    @Field(() => [EventTypeCreateWithoutUsersInput], {nullable:true})
    @Type(() => EventTypeCreateWithoutUsersInput)
    create?: Array<EventTypeCreateWithoutUsersInput>;

    @Field(() => [EventTypeCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => EventTypeCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<EventTypeCreateOrConnectWithoutUsersInput>;

    @Field(() => [EventTypeUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => EventTypeUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<EventTypeUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    set?: Array<EventTypeWhereUniqueInput>;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    disconnect?: Array<EventTypeWhereUniqueInput>;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    delete?: Array<EventTypeWhereUniqueInput>;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    @Type(() => EventTypeWhereUniqueInput)
    connect?: Array<EventTypeWhereUniqueInput>;

    @Field(() => [EventTypeUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => EventTypeUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<EventTypeUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [EventTypeUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => EventTypeUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<EventTypeUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [EventTypeScalarWhereInput], {nullable:true})
    @Type(() => EventTypeScalarWhereInput)
    deleteMany?: Array<EventTypeScalarWhereInput>;
}
