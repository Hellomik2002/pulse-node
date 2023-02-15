import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormCreateWithoutUserInput } from './app-routing-forms-form-create-without-user.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormCreateOrConnectWithoutUserInput } from './app-routing-forms-form-create-or-connect-without-user.input';
import { App_RoutingForms_FormCreateManyUserInputEnvelope } from './app-routing-forms-form-create-many-user-input-envelope.input';
import { App_RoutingForms_FormWhereUniqueInput } from './app-routing-forms-form-where-unique.input';

@InputType()
export class App_RoutingForms_FormCreateNestedManyWithoutUserInput {

    @Field(() => [App_RoutingForms_FormCreateWithoutUserInput], {nullable:true})
    @Type(() => App_RoutingForms_FormCreateWithoutUserInput)
    create?: Array<App_RoutingForms_FormCreateWithoutUserInput>;

    @Field(() => [App_RoutingForms_FormCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => App_RoutingForms_FormCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<App_RoutingForms_FormCreateOrConnectWithoutUserInput>;

    @Field(() => App_RoutingForms_FormCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => App_RoutingForms_FormCreateManyUserInputEnvelope)
    createMany?: App_RoutingForms_FormCreateManyUserInputEnvelope;

    @Field(() => [App_RoutingForms_FormWhereUniqueInput], {nullable:true})
    @Type(() => App_RoutingForms_FormWhereUniqueInput)
    connect?: Array<App_RoutingForms_FormWhereUniqueInput>;
}
