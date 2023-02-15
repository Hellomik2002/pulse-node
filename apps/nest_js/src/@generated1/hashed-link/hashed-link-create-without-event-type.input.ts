import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HashedLinkCreateWithoutEventTypeInput {

    @Field(() => String, {nullable:false})
    link!: string;
}
