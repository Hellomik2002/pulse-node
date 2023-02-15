import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HashedLinkCreateManyInput } from './hashed-link-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHashedLinkArgs {

    @Field(() => [HashedLinkCreateManyInput], {nullable:false})
    @Type(() => HashedLinkCreateManyInput)
    data!: Array<HashedLinkCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
