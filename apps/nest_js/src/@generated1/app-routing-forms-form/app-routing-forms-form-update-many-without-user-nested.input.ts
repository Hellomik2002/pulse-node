import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormCreateWithoutUserInput } from './app-routing-forms-form-create-without-user.input';
import { Type } from 'class-transformer';
import { App_RoutingForms_FormCreateOrConnectWithoutUserInput } from './app-routing-forms-form-create-or-connect-without-user.input';
import { App_RoutingForms_FormUpsertWithWhereUniqueWithoutUserInput } from './app-routing-forms-form-upsert-with-where-unique-without-user.input';
import { App_RoutingForms_FormCreateManyUserInputEnvelope } from './app-routing-forms-form-create-many-user-input-envelope.input';
import { App_RoutingForms_FormWhereUniqueInput } from './app-routing-forms-form-where-unique.input';
import { App_RoutingForms_FormUpdateWithWhereUniqueWithoutUserInput } from './app-routing-forms-form-update-with-where-unique-without-user.input';
import { App_RoutingForms_FormUpdateManyWithWhereWithoutUserInput } from './app-routing-forms-form-update-many-with-where-without-user.input';
import { App_RoutingForms_FormScalarWhereInput } from './app-routing-forms-form-scalar-where.input';

@InputType()
export class App_RoutingForms_FormUpdateManyWithoutUserNestedInput {

    @Field(() => [App_RoutingForms_FormCreateWithoutUserInput], {nullable:true})
    @Type(() => App_RoutingForms_FormCreateWithoutUserInput)
    create?: Array<App_RoutingForms_FormCreateWithoutUserInput>;

    @Field(() => [App_RoutingForms_FormCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => App_RoutingForms_FormCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<App_RoutingForms_FormCreateOrConnectWithoutUserInput>;

    @Field(() => [App_RoutingForms_FormUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => App_RoutingForms_FormUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<App_RoutingForms_FormUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => App_RoutingForms_FormCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => App_RoutingForms_FormCreateManyUserInputEnvelope)
    createMany?: App_RoutingForms_FormCreateManyUserInputEnvelope;

    @Field(() => [App_RoutingForms_FormWhereUniqueInput], {nullable:true})
    @Type(() => App_RoutingForms_FormWhereUniqueInput)
    set?: Array<App_RoutingForms_FormWhereUniqueInput>;

    @Field(() => [App_RoutingForms_FormWhereUniqueInput], {nullable:true})
    @Type(() => App_RoutingForms_FormWhereUniqueInput)
    disconnect?: Array<App_RoutingForms_FormWhereUniqueInput>;

    @Field(() => [App_RoutingForms_FormWhereUniqueInput], {nullable:true})
    @Type(() => App_RoutingForms_FormWhereUniqueInput)
    delete?: Array<App_RoutingForms_FormWhereUniqueInput>;

    @Field(() => [App_RoutingForms_FormWhereUniqueInput], {nullable:true})
    @Type(() => App_RoutingForms_FormWhereUniqueInput)
    connect?: Array<App_RoutingForms_FormWhereUniqueInput>;

    @Field(() => [App_RoutingForms_FormUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => App_RoutingForms_FormUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<App_RoutingForms_FormUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [App_RoutingForms_FormUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => App_RoutingForms_FormUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<App_RoutingForms_FormUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [App_RoutingForms_FormScalarWhereInput], {nullable:true})
    @Type(() => App_RoutingForms_FormScalarWhereInput)
    deleteMany?: Array<App_RoutingForms_FormScalarWhereInput>;
}
