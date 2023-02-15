import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Impersonations {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => User, {nullable:false})
    impersonatedUser?: User;

    @Field(() => User, {nullable:false})
    impersonatedBy?: User;

    @Field(() => Int, {nullable:false})
    impersonatedUserId!: number;

    @Field(() => Int, {nullable:false})
    impersonatedById!: number;
}
