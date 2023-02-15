import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HashedLinkWhereUniqueInput } from './hashed-link-where-unique.input';
import { Type } from 'class-transformer';
import { HashedLinkCreateInput } from './hashed-link-create.input';
import { HashedLinkUpdateInput } from './hashed-link-update.input';

@ArgsType()
export class UpsertOneHashedLinkArgs {

    @Field(() => HashedLinkWhereUniqueInput, {nullable:false})
    @Type(() => HashedLinkWhereUniqueInput)
    where!: HashedLinkWhereUniqueInput;

    @Field(() => HashedLinkCreateInput, {nullable:false})
    @Type(() => HashedLinkCreateInput)
    create!: HashedLinkCreateInput;

    @Field(() => HashedLinkUpdateInput, {nullable:false})
    @Type(() => HashedLinkUpdateInput)
    update!: HashedLinkUpdateInput;
}
