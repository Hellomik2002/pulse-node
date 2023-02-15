import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { App } from '../app/app.model';

@ObjectType()
export class ApiKey {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:true})
    note!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    expiresAt!: Date | null;

    @Field(() => Date, {nullable:true})
    lastUsedAt!: Date | null;

    @Field(() => String, {nullable:false})
    hashedKey!: string;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => App, {nullable:true})
    app?: App | null;

    @Field(() => String, {nullable:true})
    appId!: string | null;
}
