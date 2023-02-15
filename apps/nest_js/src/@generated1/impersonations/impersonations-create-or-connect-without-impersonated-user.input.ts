import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImpersonationsWhereUniqueInput } from './impersonations-where-unique.input';
import { Type } from 'class-transformer';
import { ImpersonationsCreateWithoutImpersonatedUserInput } from './impersonations-create-without-impersonated-user.input';

@InputType()
export class ImpersonationsCreateOrConnectWithoutImpersonatedUserInput {

    @Field(() => ImpersonationsWhereUniqueInput, {nullable:false})
    @Type(() => ImpersonationsWhereUniqueInput)
    where!: ImpersonationsWhereUniqueInput;

    @Field(() => ImpersonationsCreateWithoutImpersonatedUserInput, {nullable:false})
    @Type(() => ImpersonationsCreateWithoutImpersonatedUserInput)
    create!: ImpersonationsCreateWithoutImpersonatedUserInput;
}
