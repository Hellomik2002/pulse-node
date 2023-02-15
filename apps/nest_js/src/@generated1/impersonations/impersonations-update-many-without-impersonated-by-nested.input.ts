import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImpersonationsCreateWithoutImpersonatedByInput } from './impersonations-create-without-impersonated-by.input';
import { Type } from 'class-transformer';
import { ImpersonationsCreateOrConnectWithoutImpersonatedByInput } from './impersonations-create-or-connect-without-impersonated-by.input';
import { ImpersonationsUpsertWithWhereUniqueWithoutImpersonatedByInput } from './impersonations-upsert-with-where-unique-without-impersonated-by.input';
import { ImpersonationsCreateManyImpersonatedByInputEnvelope } from './impersonations-create-many-impersonated-by-input-envelope.input';
import { ImpersonationsWhereUniqueInput } from './impersonations-where-unique.input';
import { ImpersonationsUpdateWithWhereUniqueWithoutImpersonatedByInput } from './impersonations-update-with-where-unique-without-impersonated-by.input';
import { ImpersonationsUpdateManyWithWhereWithoutImpersonatedByInput } from './impersonations-update-many-with-where-without-impersonated-by.input';
import { ImpersonationsScalarWhereInput } from './impersonations-scalar-where.input';

@InputType()
export class ImpersonationsUpdateManyWithoutImpersonatedByNestedInput {

    @Field(() => [ImpersonationsCreateWithoutImpersonatedByInput], {nullable:true})
    @Type(() => ImpersonationsCreateWithoutImpersonatedByInput)
    create?: Array<ImpersonationsCreateWithoutImpersonatedByInput>;

    @Field(() => [ImpersonationsCreateOrConnectWithoutImpersonatedByInput], {nullable:true})
    @Type(() => ImpersonationsCreateOrConnectWithoutImpersonatedByInput)
    connectOrCreate?: Array<ImpersonationsCreateOrConnectWithoutImpersonatedByInput>;

    @Field(() => [ImpersonationsUpsertWithWhereUniqueWithoutImpersonatedByInput], {nullable:true})
    @Type(() => ImpersonationsUpsertWithWhereUniqueWithoutImpersonatedByInput)
    upsert?: Array<ImpersonationsUpsertWithWhereUniqueWithoutImpersonatedByInput>;

    @Field(() => ImpersonationsCreateManyImpersonatedByInputEnvelope, {nullable:true})
    @Type(() => ImpersonationsCreateManyImpersonatedByInputEnvelope)
    createMany?: ImpersonationsCreateManyImpersonatedByInputEnvelope;

    @Field(() => [ImpersonationsWhereUniqueInput], {nullable:true})
    @Type(() => ImpersonationsWhereUniqueInput)
    set?: Array<ImpersonationsWhereUniqueInput>;

    @Field(() => [ImpersonationsWhereUniqueInput], {nullable:true})
    @Type(() => ImpersonationsWhereUniqueInput)
    disconnect?: Array<ImpersonationsWhereUniqueInput>;

    @Field(() => [ImpersonationsWhereUniqueInput], {nullable:true})
    @Type(() => ImpersonationsWhereUniqueInput)
    delete?: Array<ImpersonationsWhereUniqueInput>;

    @Field(() => [ImpersonationsWhereUniqueInput], {nullable:true})
    @Type(() => ImpersonationsWhereUniqueInput)
    connect?: Array<ImpersonationsWhereUniqueInput>;

    @Field(() => [ImpersonationsUpdateWithWhereUniqueWithoutImpersonatedByInput], {nullable:true})
    @Type(() => ImpersonationsUpdateWithWhereUniqueWithoutImpersonatedByInput)
    update?: Array<ImpersonationsUpdateWithWhereUniqueWithoutImpersonatedByInput>;

    @Field(() => [ImpersonationsUpdateManyWithWhereWithoutImpersonatedByInput], {nullable:true})
    @Type(() => ImpersonationsUpdateManyWithWhereWithoutImpersonatedByInput)
    updateMany?: Array<ImpersonationsUpdateManyWithWhereWithoutImpersonatedByInput>;

    @Field(() => [ImpersonationsScalarWhereInput], {nullable:true})
    @Type(() => ImpersonationsScalarWhereInput)
    deleteMany?: Array<ImpersonationsScalarWhereInput>;
}
