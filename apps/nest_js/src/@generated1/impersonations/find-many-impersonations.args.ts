import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImpersonationsWhereInput } from './impersonations-where.input';
import { Type } from 'class-transformer';
import { ImpersonationsOrderByWithRelationInput } from './impersonations-order-by-with-relation.input';
import { ImpersonationsWhereUniqueInput } from './impersonations-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ImpersonationsScalarFieldEnum } from './impersonations-scalar-field.enum';

@ArgsType()
export class FindManyImpersonationsArgs {

    @Field(() => ImpersonationsWhereInput, {nullable:true})
    @Type(() => ImpersonationsWhereInput)
    where?: ImpersonationsWhereInput;

    @Field(() => [ImpersonationsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImpersonationsOrderByWithRelationInput>;

    @Field(() => ImpersonationsWhereUniqueInput, {nullable:true})
    cursor?: ImpersonationsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ImpersonationsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ImpersonationsScalarFieldEnum>;
}
