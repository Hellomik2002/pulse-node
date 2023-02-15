import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImpersonationsWhereUniqueInput } from './impersonations-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueImpersonationsOrThrowArgs {

    @Field(() => ImpersonationsWhereUniqueInput, {nullable:false})
    @Type(() => ImpersonationsWhereUniqueInput)
    where!: ImpersonationsWhereUniqueInput;
}
