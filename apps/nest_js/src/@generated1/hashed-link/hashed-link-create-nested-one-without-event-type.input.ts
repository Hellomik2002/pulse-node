import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HashedLinkCreateWithoutEventTypeInput } from './hashed-link-create-without-event-type.input';
import { Type } from 'class-transformer';
import { HashedLinkCreateOrConnectWithoutEventTypeInput } from './hashed-link-create-or-connect-without-event-type.input';
import { HashedLinkWhereUniqueInput } from './hashed-link-where-unique.input';

@InputType()
export class HashedLinkCreateNestedOneWithoutEventTypeInput {

    @Field(() => HashedLinkCreateWithoutEventTypeInput, {nullable:true})
    @Type(() => HashedLinkCreateWithoutEventTypeInput)
    create?: HashedLinkCreateWithoutEventTypeInput;

    @Field(() => HashedLinkCreateOrConnectWithoutEventTypeInput, {nullable:true})
    @Type(() => HashedLinkCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: HashedLinkCreateOrConnectWithoutEventTypeInput;

    @Field(() => HashedLinkWhereUniqueInput, {nullable:true})
    @Type(() => HashedLinkWhereUniqueInput)
    connect?: HashedLinkWhereUniqueInput;
}
