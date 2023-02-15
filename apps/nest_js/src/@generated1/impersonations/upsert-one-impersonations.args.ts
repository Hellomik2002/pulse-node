import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImpersonationsWhereUniqueInput } from './impersonations-where-unique.input';
import { Type } from 'class-transformer';
import { ImpersonationsCreateInput } from './impersonations-create.input';
import { ImpersonationsUpdateInput } from './impersonations-update.input';

@ArgsType()
export class UpsertOneImpersonationsArgs {

    @Field(() => ImpersonationsWhereUniqueInput, {nullable:false})
    @Type(() => ImpersonationsWhereUniqueInput)
    where!: ImpersonationsWhereUniqueInput;

    @Field(() => ImpersonationsCreateInput, {nullable:false})
    @Type(() => ImpersonationsCreateInput)
    create!: ImpersonationsCreateInput;

    @Field(() => ImpersonationsUpdateInput, {nullable:false})
    @Type(() => ImpersonationsUpdateInput)
    update!: ImpersonationsUpdateInput;
}
