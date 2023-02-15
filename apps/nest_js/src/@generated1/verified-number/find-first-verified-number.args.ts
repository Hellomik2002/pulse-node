import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifiedNumberWhereInput } from './verified-number-where.input';
import { Type } from 'class-transformer';
import { VerifiedNumberOrderByWithRelationInput } from './verified-number-order-by-with-relation.input';
import { VerifiedNumberWhereUniqueInput } from './verified-number-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VerifiedNumberScalarFieldEnum } from './verified-number-scalar-field.enum';

@ArgsType()
export class FindFirstVerifiedNumberArgs {

    @Field(() => VerifiedNumberWhereInput, {nullable:true})
    @Type(() => VerifiedNumberWhereInput)
    where?: VerifiedNumberWhereInput;

    @Field(() => [VerifiedNumberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerifiedNumberOrderByWithRelationInput>;

    @Field(() => VerifiedNumberWhereUniqueInput, {nullable:true})
    cursor?: VerifiedNumberWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VerifiedNumberScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VerifiedNumberScalarFieldEnum>;
}
