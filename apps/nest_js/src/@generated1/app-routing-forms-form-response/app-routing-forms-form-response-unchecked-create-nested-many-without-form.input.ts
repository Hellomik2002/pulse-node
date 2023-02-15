import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseCreateWithoutFormInput } from './app-routing-forms-form-response-create-without-form.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormResponseCreateOrConnectWithoutFormInput } from './app-routing-forms-form-response-create-or-connect-without-form.input';
import { App_RoutingForms_FormResponseCreateManyFormInputEnvelope } from './app-routing-forms-form-response-create-many-form-input-envelope.input';
import { App_RoutingForms_FormResponseWhereUniqueInput } from './app-routing-forms-form-response-where-unique.input';

@InputType()
export class App_RoutingForms_FormResponseUncheckedCreateNestedManyWithoutFormInput {

    @Field(() => [App_RoutingForms_FormResponseCreateWithoutFormInput], {nullable:true})
    @Type(() => App_RoutingForms_FormResponseCreateWithoutFormInput)
    create?: Array<App_RoutingForms_FormResponseCreateWithoutFormInput>;

    @Field(() => [App_RoutingForms_FormResponseCreateOrConnectWithoutFormInput], {nullable:true})
    @Type(() => App_RoutingForms_FormResponseCreateOrConnectWithoutFormInput)
    connectOrCreate?: Array<App_RoutingForms_FormResponseCreateOrConnectWithoutFormInput>;

    @Field(() => App_RoutingForms_FormResponseCreateManyFormInputEnvelope, {nullable:true})
    @Type(() => App_RoutingForms_FormResponseCreateManyFormInputEnvelope)
    createMany?: App_RoutingForms_FormResponseCreateManyFormInputEnvelope;

    @Field(() => [App_RoutingForms_FormResponseWhereUniqueInput], {nullable:true})
    @Type(() => App_RoutingForms_FormResponseWhereUniqueInput)
    connect?: Array<App_RoutingForms_FormResponseWhereUniqueInput>;
}
