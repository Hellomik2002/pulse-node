import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImpersonationsWhereInput } from './impersonations-where.input';

@InputType()
export class ImpersonationsListRelationFilter {

    @Field(() => ImpersonationsWhereInput, {nullable:true})
    every?: ImpersonationsWhereInput;

    @Field(() => ImpersonationsWhereInput, {nullable:true})
    some?: ImpersonationsWhereInput;

    @Field(() => ImpersonationsWhereInput, {nullable:true})
    none?: ImpersonationsWhereInput;
}
