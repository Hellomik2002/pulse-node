import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HashedLinkCreateInput } from './hashed-link-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHashedLinkArgs {

    @Field(() => HashedLinkCreateInput, {nullable:false})
    @Type(() => HashedLinkCreateInput)
    data!: HashedLinkCreateInput;
}
