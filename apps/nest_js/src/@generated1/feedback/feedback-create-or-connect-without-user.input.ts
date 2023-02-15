import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { Type } from 'class-transformer';
import { FeedbackCreateWithoutUserInput } from './feedback-create-without-user.input';

@InputType()
export class FeedbackCreateOrConnectWithoutUserInput {

    @Field(() => FeedbackWhereUniqueInput, {nullable:false})
    @Type(() => FeedbackWhereUniqueInput)
    where!: FeedbackWhereUniqueInput;

    @Field(() => FeedbackCreateWithoutUserInput, {nullable:false})
    @Type(() => FeedbackCreateWithoutUserInput)
    create!: FeedbackCreateWithoutUserInput;
}
