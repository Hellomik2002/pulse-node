import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FeedbackCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => String, {nullable:false})
    rating!: string;

    @Field(() => String, {nullable:true})
    comment?: string;
}
