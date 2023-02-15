import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImpersonationsWhereUniqueInput } from './impersonations-where-unique.input';
import { Type } from 'class-transformer';
import { ImpersonationsCreateWithoutImpersonatedByInput } from './impersonations-create-without-impersonated-by.input';

@InputType()
export class ImpersonationsCreateOrConnectWithoutImpersonatedByInput {

    @Field(() => ImpersonationsWhereUniqueInput, {nullable:false})
    @Type(() => ImpersonationsWhereUniqueInput)
    where!: ImpersonationsWhereUniqueInput;

    @Field(() => ImpersonationsCreateWithoutImpersonatedByInput, {nullable:false})
    @Type(() => ImpersonationsCreateWithoutImpersonatedByInput)
    create!: ImpersonationsCreateWithoutImpersonatedByInput;
}
