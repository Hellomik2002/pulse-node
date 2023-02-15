import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HashedLinkCreateWithoutEventTypeInput } from './hashed-link-create-without-event-type.input';
import { Type } from 'class-transformer';
import { HashedLinkCreateOrConnectWithoutEventTypeInput } from './hashed-link-create-or-connect-without-event-type.input';
import { HashedLinkUpsertWithoutEventTypeInput } from './hashed-link-upsert-without-event-type.input';
import { HashedLinkWhereUniqueInput } from './hashed-link-where-unique.input';
import { HashedLinkUpdateWithoutEventTypeInput } from './hashed-link-update-without-event-type.input';

@InputType()
export class HashedLinkUpdateOneWithoutEventTypeNestedInput {

    @Field(() => HashedLinkCreateWithoutEventTypeInput, {nullable:true})
    @Type(() => HashedLinkCreateWithoutEventTypeInput)
    create?: HashedLinkCreateWithoutEventTypeInput;

    @Field(() => HashedLinkCreateOrConnectWithoutEventTypeInput, {nullable:true})
    @Type(() => HashedLinkCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: HashedLinkCreateOrConnectWithoutEventTypeInput;

    @Field(() => HashedLinkUpsertWithoutEventTypeInput, {nullable:true})
    @Type(() => HashedLinkUpsertWithoutEventTypeInput)
    upsert?: HashedLinkUpsertWithoutEventTypeInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => HashedLinkWhereUniqueInput, {nullable:true})
    @Type(() => HashedLinkWhereUniqueInput)
    connect?: HashedLinkWhereUniqueInput;

    @Field(() => HashedLinkUpdateWithoutEventTypeInput, {nullable:true})
    @Type(() => HashedLinkUpdateWithoutEventTypeInput)
    update?: HashedLinkUpdateWithoutEventTypeInput;
}
