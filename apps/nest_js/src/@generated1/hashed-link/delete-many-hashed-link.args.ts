import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HashedLinkWhereInput } from './hashed-link-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHashedLinkArgs {

    @Field(() => HashedLinkWhereInput, {nullable:true})
    @Type(() => HashedLinkWhereInput)
    where?: HashedLinkWhereInput;
}
