import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEventTypesInput } from './user-create-without-event-types.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEventTypesInput } from './user-create-or-connect-without-event-types.input';
import { UserUpsertWithWhereUniqueWithoutEventTypesInput } from './user-upsert-with-where-unique-without-event-types.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutEventTypesInput } from './user-update-with-where-unique-without-event-types.input';
import { UserUpdateManyWithWhereWithoutEventTypesInput } from './user-update-many-with-where-without-event-types.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutEventTypesNestedInput {

    @Field(() => [UserCreateWithoutEventTypesInput], {nullable:true})
    @Type(() => UserCreateWithoutEventTypesInput)
    create?: Array<UserCreateWithoutEventTypesInput>;

    @Field(() => [UserCreateOrConnectWithoutEventTypesInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEventTypesInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutEventTypesInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutEventTypesInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutEventTypesInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutEventTypesInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutEventTypesInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutEventTypesInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutEventTypesInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutEventTypesInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutEventTypesInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutEventTypesInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
