import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DestinationCalendarCount {

    @Field(() => Int, {nullable:false})
    booking?: number;
}
