import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImpersonationsCreateWithoutImpersonatedUserInput } from './impersonations-create-without-impersonated-user.input';
import { Type } from 'class-transformer';
import { ImpersonationsCreateOrConnectWithoutImpersonatedUserInput } from './impersonations-create-or-connect-without-impersonated-user.input';
import { ImpersonationsCreateManyImpersonatedUserInputEnvelope } from './impersonations-create-many-impersonated-user-input-envelope.input';
import { ImpersonationsWhereUniqueInput } from './impersonations-where-unique.input';

@InputType()
export class ImpersonationsCreateNestedManyWithoutImpersonatedUserInput {

    @Field(() => [ImpersonationsCreateWithoutImpersonatedUserInput], {nullable:true})
    @Type(() => ImpersonationsCreateWithoutImpersonatedUserInput)
    create?: Array<ImpersonationsCreateWithoutImpersonatedUserInput>;

    @Field(() => [ImpersonationsCreateOrConnectWithoutImpersonatedUserInput], {nullable:true})
    @Type(() => ImpersonationsCreateOrConnectWithoutImpersonatedUserInput)
    connectOrCreate?: Array<ImpersonationsCreateOrConnectWithoutImpersonatedUserInput>;

    @Field(() => ImpersonationsCreateManyImpersonatedUserInputEnvelope, {nullable:true})
    @Type(() => ImpersonationsCreateManyImpersonatedUserInputEnvelope)
    createMany?: ImpersonationsCreateManyImpersonatedUserInputEnvelope;

    @Field(() => [ImpersonationsWhereUniqueInput], {nullable:true})
    @Type(() => ImpersonationsWhereUniqueInput)
    connect?: Array<ImpersonationsWhereUniqueInput>;
}
