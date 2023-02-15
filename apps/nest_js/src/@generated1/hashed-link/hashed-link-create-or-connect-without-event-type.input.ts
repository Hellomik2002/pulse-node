import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HashedLinkWhereUniqueInput } from './hashed-link-where-unique.input';
import { Type } from 'class-transformer';
import { HashedLinkCreateWithoutEventTypeInput } from './hashed-link-create-without-event-type.input';

@InputType()
export class HashedLinkCreateOrConnectWithoutEventTypeInput {

    @Field(() => HashedLinkWhereUniqueInput, {nullable:false})
    @Type(() => HashedLinkWhereUniqueInput)
    where!: HashedLinkWhereUniqueInput;

    @Field(() => HashedLinkCreateWithoutEventTypeInput, {nullable:false})
    @Type(() => HashedLinkCreateWithoutEventTypeInput)
    create!: HashedLinkCreateWithoutEventTypeInput;
}
