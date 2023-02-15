import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRoutingFormsInput } from './user-create-without-routing-forms.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRoutingFormsInput } from './user-create-or-connect-without-routing-forms.input';
import { UserUpsertWithoutRoutingFormsInput } from './user-upsert-without-routing-forms.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutRoutingFormsInput } from './user-update-without-routing-forms.input';

@InputType()
export class UserUpdateOneRequiredWithoutRoutingFormsNestedInput {

    @Field(() => UserCreateWithoutRoutingFormsInput, {nullable:true})
    @Type(() => UserCreateWithoutRoutingFormsInput)
    create?: UserCreateWithoutRoutingFormsInput;

    @Field(() => UserCreateOrConnectWithoutRoutingFormsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRoutingFormsInput)
    connectOrCreate?: UserCreateOrConnectWithoutRoutingFormsInput;

    @Field(() => UserUpsertWithoutRoutingFormsInput, {nullable:true})
    @Type(() => UserUpsertWithoutRoutingFormsInput)
    upsert?: UserUpsertWithoutRoutingFormsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutRoutingFormsInput, {nullable:true})
    @Type(() => UserUpdateWithoutRoutingFormsInput)
    update?: UserUpdateWithoutRoutingFormsInput;
}
