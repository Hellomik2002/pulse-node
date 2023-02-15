import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseCreateWithoutFormInput } from './app-routing-forms-form-response-create-without-form.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormResponseCreateOrConnectWithoutFormInput } from './app-routing-forms-form-response-create-or-connect-without-form.input';
import { App_RoutingForms_FormResponseUpsertWithWhereUniqueWithoutFormInput } from './app-routing-forms-form-response-upsert-with-where-unique-without-form.input';
import { App_RoutingForms_FormResponseCreateManyFormInputEnvelope } from './app-routing-forms-form-response-create-many-form-input-envelope.input';
import { App_RoutingForms_FormResponseWhereUniqueInput } from './app-routing-forms-form-response-where-unique.input';
import { App_RoutingForms_FormResponseUpdateWithWhereUniqueWithoutFormInput } from './app-routing-forms-form-response-update-with-where-unique-without-form.input';
import { App_RoutingForms_FormResponseUpdateManyWithWhereWithoutFormInput } from './app-routing-forms-form-response-update-many-with-where-without-form.input';
import { App_RoutingForms_FormResponseScalarWhereInput } from './app-routing-forms-form-response-scalar-where.input';

@InputType()
export class App_RoutingForms_FormResponseUncheckedUpdateManyWithoutFormNestedInput {

    @Field(() => [App_RoutingForms_FormResponseCreateWithoutFormInput], {nullable:true})
    @Type(() => App_RoutingForms_FormResponseCreateWithoutFormInput)
    create?: Array<App_RoutingForms_FormResponseCreateWithoutFormInput>;

    @Field(() => [App_RoutingForms_FormResponseCreateOrConnectWithoutFormInput], {nullable:true})
    @Type(() => App_RoutingForms_FormResponseCreateOrConnectWithoutFormInput)
    connectOrCreate?: Array<App_RoutingForms_FormResponseCreateOrConnectWithoutFormInput>;

    @Field(() => [App_RoutingForms_FormResponseUpsertWithWhereUniqueWithoutFormInput], {nullable:true})
    @Type(() => App_RoutingForms_FormResponseUpsertWithWhereUniqueWithoutFormInput)
    upsert?: Array<App_RoutingForms_FormResponseUpsertWithWhereUniqueWithoutFormInput>;

    @Field(() => App_RoutingForms_FormResponseCreateManyFormInputEnvelope, {nullable:true})
    @Type(() => App_RoutingForms_FormResponseCreateManyFormInputEnvelope)
    createMany?: App_RoutingForms_FormResponseCreateManyFormInputEnvelope;

    @Field(() => [App_RoutingForms_FormResponseWhereUniqueInput], {nullable:true})
    @Type(() => App_RoutingForms_FormResponseWhereUniqueInput)
    set?: Array<App_RoutingForms_FormResponseWhereUniqueInput>;

    @Field(() => [App_RoutingForms_FormResponseWhereUniqueInput], {nullable:true})
    @Type(() => App_RoutingForms_FormResponseWhereUniqueInput)
    disconnect?: Array<App_RoutingForms_FormResponseWhereUniqueInput>;

    @Field(() => [App_RoutingForms_FormResponseWhereUniqueInput], {nullable:true})
    @Type(() => App_RoutingForms_FormResponseWhereUniqueInput)
    delete?: Array<App_RoutingForms_FormResponseWhereUniqueInput>;

    @Field(() => [App_RoutingForms_FormResponseWhereUniqueInput], {nullable:true})
    @Type(() => App_RoutingForms_FormResponseWhereUniqueInput)
    connect?: Array<App_RoutingForms_FormResponseWhereUniqueInput>;

    @Field(() => [App_RoutingForms_FormResponseUpdateWithWhereUniqueWithoutFormInput], {nullable:true})
    @Type(() => App_RoutingForms_FormResponseUpdateWithWhereUniqueWithoutFormInput)
    update?: Array<App_RoutingForms_FormResponseUpdateWithWhereUniqueWithoutFormInput>;

    @Field(() => [App_RoutingForms_FormResponseUpdateManyWithWhereWithoutFormInput], {nullable:true})
    @Type(() => App_RoutingForms_FormResponseUpdateManyWithWhereWithoutFormInput)
    updateMany?: Array<App_RoutingForms_FormResponseUpdateManyWithWhereWithoutFormInput>;

    @Field(() => [App_RoutingForms_FormResponseScalarWhereInput], {nullable:true})
    @Type(() => App_RoutingForms_FormResponseScalarWhereInput)
    deleteMany?: Array<App_RoutingForms_FormResponseScalarWhereInput>;
}
