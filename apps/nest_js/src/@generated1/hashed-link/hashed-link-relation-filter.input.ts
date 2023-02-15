import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HashedLinkWhereInput } from './hashed-link-where.input';

@InputType()
export class HashedLinkRelationFilter {

    @Field(() => HashedLinkWhereInput, {nullable:true})
    is?: HashedLinkWhereInput;

    @Field(() => HashedLinkWhereInput, {nullable:true})
    isNot?: HashedLinkWhereInput;
}
