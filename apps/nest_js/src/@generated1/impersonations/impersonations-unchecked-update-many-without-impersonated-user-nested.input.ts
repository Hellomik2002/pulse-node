import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImpersonationsCreateWithoutImpersonatedUserInput } from './impersonations-create-without-impersonated-user.input';
import { Type } from 'class-transformer';
import { ImpersonationsCreateOrConnectWithoutImpersonatedUserInput } from './impersonations-create-or-connect-without-impersonated-user.input';
import { ImpersonationsUpsertWithWhereUniqueWithoutImpersonatedUserInput } from './impersonations-upsert-with-where-unique-without-impersonated-user.input';
import { ImpersonationsCreateManyImpersonatedUserInputEnvelope } from './impersonations-create-many-impersonated-user-input-envelope.input';
import { ImpersonationsWhereUniqueInput } from './impersonations-where-unique.input';
import { ImpersonationsUpdateWithWhereUniqueWithoutImpersonatedUserInput } from './impersonations-update-with-where-unique-without-impersonated-user.input';
import { ImpersonationsUpdateManyWithWhereWithoutImpersonatedUserInput } from './impersonations-update-many-with-where-without-impersonated-user.input';
import { ImpersonationsScalarWhereInput } from './impersonations-scalar-where.input';

@InputType()
export class ImpersonationsUncheckedUpdateManyWithoutImpersonatedUserNestedInput {

    @Field(() => [ImpersonationsCreateWithoutImpersonatedUserInput], {nullable:true})
    @Type(() => ImpersonationsCreateWithoutImpersonatedUserInput)
    create?: Array<ImpersonationsCreateWithoutImpersonatedUserInput>;

    @Field(() => [ImpersonationsCreateOrConnectWithoutImpersonatedUserInput], {nullable:true})
    @Type(() => ImpersonationsCreateOrConnectWithoutImpersonatedUserInput)
    connectOrCreate?: Array<ImpersonationsCreateOrConnectWithoutImpersonatedUserInput>;

    @Field(() => [ImpersonationsUpsertWithWhereUniqueWithoutImpersonatedUserInput], {nullable:true})
    @Type(() => ImpersonationsUpsertWithWhereUniqueWithoutImpersonatedUserInput)
    upsert?: Array<ImpersonationsUpsertWithWhereUniqueWithoutImpersonatedUserInput>;

    @Field(() => ImpersonationsCreateManyImpersonatedUserInputEnvelope, {nullable:true})
    @Type(() => ImpersonationsCreateManyImpersonatedUserInputEnvelope)
    createMany?: ImpersonationsCreateManyImpersonatedUserInputEnvelope;

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

    @Field(() => [ImpersonationsUpdateWithWhereUniqueWithoutImpersonatedUserInput], {nullable:true})
    @Type(() => ImpersonationsUpdateWithWhereUniqueWithoutImpersonatedUserInput)
    update?: Array<ImpersonationsUpdateWithWhereUniqueWithoutImpersonatedUserInput>;

    @Field(() => [ImpersonationsUpdateManyWithWhereWithoutImpersonatedUserInput], {nullable:true})
    @Type(() => ImpersonationsUpdateManyWithWhereWithoutImpersonatedUserInput)
    updateMany?: Array<ImpersonationsUpdateManyWithWhereWithoutImpersonatedUserInput>;

    @Field(() => [ImpersonationsScalarWhereInput], {nullable:true})
    @Type(() => ImpersonationsScalarWhereInput)
    deleteMany?: Array<ImpersonationsScalarWhereInput>;
}
