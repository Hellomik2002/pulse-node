import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class FeedbackUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => String, {nullable:false})
    rating!: string;

    @Field(() => String, {nullable:true})
    comment?: string;
}
