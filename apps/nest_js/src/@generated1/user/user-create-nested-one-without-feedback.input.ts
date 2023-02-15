import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFeedbackInput } from './user-create-without-feedback.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFeedbackInput } from './user-create-or-connect-without-feedback.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFeedbackInput {

    @Field(() => UserCreateWithoutFeedbackInput, {nullable:true})
    @Type(() => UserCreateWithoutFeedbackInput)
    create?: UserCreateWithoutFeedbackInput;

    @Field(() => UserCreateOrConnectWithoutFeedbackInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFeedbackInput)
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
