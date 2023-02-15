import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HashedLinkWhereUniqueInput } from './hashed-link-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneHashedLinkArgs {

    @Field(() => HashedLinkWhereUniqueInput, {nullable:false})
    @Type(() => HashedLinkWhereUniqueInput)
    where!: HashedLinkWhereUniqueInput;
}
