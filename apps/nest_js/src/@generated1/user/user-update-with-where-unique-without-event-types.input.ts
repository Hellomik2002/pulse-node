import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutEventTypesInput } from './user-update-without-event-types.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutEventTypesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutEventTypesInput, {nullable:false})
    @Type(() => UserUpdateWithoutEventTypesInput)
    data!: UserUpdateWithoutEventTypesInput;
}
