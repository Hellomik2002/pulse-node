import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAvailabilityInput } from './user-create-without-availability.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAvailabilityInput } from './user-create-or-connect-without-availability.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAvailabilityInput {

    @Field(() => UserCreateWithoutAvailabilityInput, {nullable:true})
    @Type(() => UserCreateWithoutAvailabilityInput)
    create?: UserCreateWithoutAvailabilityInput;

    @Field(() => UserCreateOrConnectWithoutAvailabilityInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAvailabilityInput)
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
