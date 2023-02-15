import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRoutingFormsInput } from './user-update-without-routing-forms.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRoutingFormsInput } from './user-create-without-routing-forms.input';

@InputType()
export class UserUpsertWithoutRoutingFormsInput {

    @Field(() => UserUpdateWithoutRoutingFormsInput, {nullable:false})
    @Type(() => UserUpdateWithoutRoutingFormsInput)
    update!: UserUpdateWithoutRoutingFormsInput;

    @Field(() => UserCreateWithoutRoutingFormsInput, {nullable:false})
    @Type(() => UserCreateWithoutRoutingFormsInput)
    create!: UserCreateWithoutRoutingFormsInput;
}
