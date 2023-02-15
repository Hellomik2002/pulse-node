import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEventTypesInput } from './user-create-without-event-types.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEventTypesInput } from './user-create-or-connect-without-event-types.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutEventTypesInput {

    @Field(() => [UserCreateWithoutEventTypesInput], {nullable:true})
    @Type(() => UserCreateWithoutEventTypesInput)
    create?: Array<UserCreateWithoutEventTypesInput>;

    @Field(() => [UserCreateOrConnectWithoutEventTypesInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEventTypesInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutEventTypesInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;
}
