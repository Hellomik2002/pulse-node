import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImpersonationsWhereUniqueInput } from './impersonations-where-unique.input';
import { Type } from 'class-transformer';
import { ImpersonationsUpdateWithoutImpersonatedUserInput } from './impersonations-update-without-impersonated-user.input';
import { ImpersonationsCreateWithoutImpersonatedUserInput } from './impersonations-create-without-impersonated-user.input';

@InputType()
export class ImpersonationsUpsertWithWhereUniqueWithoutImpersonatedUserInput {

    @Field(() => ImpersonationsWhereUniqueInput, {nullable:false})
    @Type(() => ImpersonationsWhereUniqueInput)
    where!: ImpersonationsWhereUniqueInput;

    @Field(() => ImpersonationsUpdateWithoutImpersonatedUserInput, {nullable:false})
    @Type(() => ImpersonationsUpdateWithoutImpersonatedUserInput)
    update!: ImpersonationsUpdateWithoutImpersonatedUserInput;

    @Field(() => ImpersonationsCreateWithoutImpersonatedUserInput, {nullable:false})
    @Type(() => ImpersonationsCreateWithoutImpersonatedUserInput)
    create!: ImpersonationsCreateWithoutImpersonatedUserInput;
}
