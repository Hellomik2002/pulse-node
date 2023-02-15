import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFeedbackInput } from './user-create-without-feedback.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFeedbackInput } from './user-create-or-connect-without-feedback.input';
import { UserUpsertWithoutFeedbackInput } from './user-upsert-without-feedback.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFeedbackInput } from './user-update-without-feedback.input';

@InputType()
export class UserUpdateOneRequiredWithoutFeedbackNestedInput {

    @Field(() => UserCreateWithoutFeedbackInput, {nullable:true})
    @Type(() => UserCreateWithoutFeedbackInput)
    create?: UserCreateWithoutFeedbackInput;

    @Field(() => UserCreateOrConnectWithoutFeedbackInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFeedbackInput)
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackInput;

    @Field(() => UserUpsertWithoutFeedbackInput, {nullable:true})
    @Type(() => UserUpsertWithoutFeedbackInput)
    upsert?: UserUpsertWithoutFeedbackInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFeedbackInput, {nullable:true})
    @Type(() => UserUpdateWithoutFeedbackInput)
    update?: UserUpdateWithoutFeedbackInput;
}
