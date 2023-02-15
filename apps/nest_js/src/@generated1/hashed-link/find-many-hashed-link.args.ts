import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HashedLinkWhereInput } from './hashed-link-where.input';
import { Type } from 'class-transformer';
import { HashedLinkOrderByWithRelationInput } from './hashed-link-order-by-with-relation.input';
import { HashedLinkWhereUniqueInput } from './hashed-link-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HashedLinkScalarFieldEnum } from './hashed-link-scalar-field.enum';

@ArgsType()
export class FindManyHashedLinkArgs {

    @Field(() => HashedLinkWhereInput, {nullable:true})
    @Type(() => HashedLinkWhereInput)
    where?: HashedLinkWhereInput;

    @Field(() => [HashedLinkOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HashedLinkOrderByWithRelationInput>;

    @Field(() => HashedLinkWhereUniqueInput, {nullable:true})
    cursor?: HashedLinkWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HashedLinkScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HashedLinkScalarFieldEnum>;
}
