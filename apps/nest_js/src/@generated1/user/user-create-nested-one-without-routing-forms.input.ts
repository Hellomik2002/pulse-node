import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRoutingFormsInput } from './user-create-without-routing-forms.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRoutingFormsInput } from './user-create-or-connect-without-routing-forms.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRoutingFormsInput {

    @Field(() => UserCreateWithoutRoutingFormsInput, {nullable:true})
    @Type(() => UserCreateWithoutRoutingFormsInput)
    create?: UserCreateWithoutRoutingFormsInput;

    @Field(() => UserCreateOrConnectWithoutRoutingFormsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRoutingFormsInput)
    connectOrCreate?: UserCreateOrConnectWithoutRoutingFormsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
