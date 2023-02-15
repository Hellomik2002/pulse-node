import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImpersonationsWhereUniqueInput } from './impersonations-where-unique.input';
import { Type } from 'class-transformer';
import { ImpersonationsUpdateWithoutImpersonatedByInput } from './impersonations-update-without-impersonated-by.input';
import { ImpersonationsCreateWithoutImpersonatedByInput } from './impersonations-create-without-impersonated-by.input';

@InputType()
export class ImpersonationsUpsertWithWhereUniqueWithoutImpersonatedByInput {

    @Field(() => ImpersonationsWhereUniqueInput, {nullable:false})
    @Type(() => ImpersonationsWhereUniqueInput)
    where!: ImpersonationsWhereUniqueInput;

    @Field(() => ImpersonationsUpdateWithoutImpersonatedByInput, {nullable:false})
    @Type(() => ImpersonationsUpdateWithoutImpersonatedByInput)
    update!: ImpersonationsUpdateWithoutImpersonatedByInput;

    @Field(() => ImpersonationsCreateWithoutImpersonatedByInput, {nullable:false})
    @Type(() => ImpersonationsCreateWithoutImpersonatedByInput)
    create!: ImpersonationsCreateWithoutImpersonatedByInput;
}
