import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFeedbackInput } from './user-create-without-feedback.input';

@InputType()
export class UserCreateOrConnectWithoutFeedbackInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFeedbackInput, {nullable:false})
    @Type(() => UserCreateWithoutFeedbackInput)
    create!: UserCreateWithoutFeedbackInput;
}
