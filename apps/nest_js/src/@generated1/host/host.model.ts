import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { EventType } from '../event-type/event-type.model';

@ObjectType()
export class Host {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => EventType, {nullable:false})
    eventType?: EventType;

    @Field(() => Int, {nullable:false})
    eventTypeId!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isFixed!: boolean;
}
