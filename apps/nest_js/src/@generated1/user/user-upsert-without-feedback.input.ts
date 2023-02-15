import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFeedbackInput } from './user-update-without-feedback.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFeedbackInput } from './user-create-without-feedback.input';

@InputType()
export class UserUpsertWithoutFeedbackInput {

    @Field(() => UserUpdateWithoutFeedbackInput, {nullable:false})
    @Type(() => UserUpdateWithoutFeedbackInput)
    update!: UserUpdateWithoutFeedbackInput;

    @Field(() => UserCreateWithoutFeedbackInput, {nullable:false})
    @Type(() => UserCreateWithoutFeedbackInput)
    create!: UserCreateWithoutFeedbackInput;
}
