import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { App } from '../app/app.model';
import { DestinationCalendar } from '../destination-calendar/destination-calendar.model';
import { CredentialCount } from './credential-count.output';

@ObjectType()
export class Credential {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    key!: any;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => App, {nullable:true})
    app?: App | null;

    @Field(() => String, {nullable:true})
    appId!: string | null;

    @Field(() => [DestinationCalendar], {nullable:true})
    destinationCalendars?: Array<DestinationCalendar>;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    invalid!: boolean | null;

    @Field(() => CredentialCount, {nullable:false})
    _count?: CredentialCount;
}
