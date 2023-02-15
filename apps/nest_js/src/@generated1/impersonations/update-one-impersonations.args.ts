import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImpersonationsUpdateInput } from './impersonations-update.input';
import { Type } from 'class-transformer';
import { ImpersonationsWhereUniqueInput } from './impersonations-where-unique.input';

@ArgsType()
export class UpdateOneImpersonationsArgs {

    @Field(() => ImpersonationsUpdateInput, {nullable:false})
    @Type(() => ImpersonationsUpdateInput)
    data!: ImpersonationsUpdateInput;

    @Field(() => ImpersonationsWhereUniqueInput, {nullable:false})
    @Type(() => ImpersonationsWhereUniqueInput)
    where!: ImpersonationsWhereUniqueInput;
}
