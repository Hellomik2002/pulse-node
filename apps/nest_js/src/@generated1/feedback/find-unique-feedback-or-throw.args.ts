import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFeedbackOrThrowArgs {

    @Field(() => FeedbackWhereUniqueInput, {nullable:false})
    @Type(() => FeedbackWhereUniqueInput)
    where!: FeedbackWhereUniqueInput;
}
