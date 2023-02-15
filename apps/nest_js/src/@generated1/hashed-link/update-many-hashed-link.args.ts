import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HashedLinkUpdateManyMutationInput } from './hashed-link-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HashedLinkWhereInput } from './hashed-link-where.input';

@ArgsType()
export class UpdateManyHashedLinkArgs {

    @Field(() => HashedLinkUpdateManyMutationInput, {nullable:false})
    @Type(() => HashedLinkUpdateManyMutationInput)
    data!: HashedLinkUpdateManyMutationInput;

    @Field(() => HashedLinkWhereInput, {nullable:true})
    @Type(() => HashedLinkWhereInput)
    where?: HashedLinkWhereInput;
}
