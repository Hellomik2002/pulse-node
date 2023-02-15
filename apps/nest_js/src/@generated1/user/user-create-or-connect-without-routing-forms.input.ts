import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRoutingFormsInput } from './user-create-without-routing-forms.input';

@InputType()
export class UserCreateOrConnectWithoutRoutingFormsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutRoutingFormsInput, {nullable:false})
    @Type(() => UserCreateWithoutRoutingFormsInput)
    create!: UserCreateWithoutRoutingFormsInput;
}
