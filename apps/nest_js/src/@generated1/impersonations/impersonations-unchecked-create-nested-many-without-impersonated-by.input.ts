import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImpersonationsCreateWithoutImpersonatedByInput } from './impersonations-create-without-impersonated-by.input';
import { Type } from 'class-transformer';
import { ImpersonationsCreateOrConnectWithoutImpersonatedByInput } from './impersonations-create-or-connect-without-impersonated-by.input';
import { ImpersonationsCreateManyImpersonatedByInputEnvelope } from './impersonations-create-many-impersonated-by-input-envelope.input';
import { ImpersonationsWhereUniqueInput } from './impersonations-where-unique.input';

@InputType()
export class ImpersonationsUncheckedCreateNestedManyWithoutImpersonatedByInput {

    @Field(() => [ImpersonationsCreateWithoutImpersonatedByInput], {nullable:true})
    @Type(() => ImpersonationsCreateWithoutImpersonatedByInput)
    create?: Array<ImpersonationsCreateWithoutImpersonatedByInput>;

    @Field(() => [ImpersonationsCreateOrConnectWithoutImpersonatedByInput], {nullable:true})
    @Type(() => ImpersonationsCreateOrConnectWithoutImpersonatedByInput)
    connectOrCreate?: Array<ImpersonationsCreateOrConnectWithoutImpersonatedByInput>;

    @Field(() => ImpersonationsCreateManyImpersonatedByInputEnvelope, {nullable:true})
    @Type(() => ImpersonationsCreateManyImpersonatedByInputEnvelope)
    createMany?: ImpersonationsCreateManyImpersonatedByInputEnvelope;

    @Field(() => [ImpersonationsWhereUniqueInput], {nullable:true})
    @Type(() => ImpersonationsWhereUniqueInput)
    connect?: Array<ImpersonationsWhereUniqueInput>;
}
