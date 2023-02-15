import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFeedbackInput } from '../user/user-create-nested-one-without-feedback.input';

@InputType()
export class FeedbackCreateInput {

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => UserCreateNestedOneWithoutFeedbackInput, {nullable:false})
    user!: UserCreateNestedOneWithoutFeedbackInput;

    @Field(() => String, {nullable:false})
    rating!: string;

    @Field(() => String, {nullable:true})
    comment?: string;
}
