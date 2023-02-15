import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CredentialCount {

    @Field(() => Int, {nullable:false})
    destinationCalendars?: number;
}
