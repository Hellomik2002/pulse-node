import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HashedLinkUpdateInput } from './hashed-link-update.input';
import { Type } from 'class-transformer';
import { HashedLinkWhereUniqueInput } from './hashed-link-where-unique.input';

@ArgsType()
export class UpdateOneHashedLinkArgs {

    @Field(() => HashedLinkUpdateInput, {nullable:false})
    @Type(() => HashedLinkUpdateInput)
    data!: HashedLinkUpdateInput;

    @Field(() => HashedLinkWhereUniqueInput, {nullable:false})
    @Type(() => HashedLinkWhereUniqueInput)
    where!: HashedLinkWhereUniqueInput;
}
