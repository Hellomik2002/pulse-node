import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HostCreateWithoutUserInput } from './host-create-without-user.input';
import { Type } from 'class-transformer';
import { HostCreateOrConnectWithoutUserInput } from './host-create-or-connect-without-user.input';
import { HostCreateManyUserInputEnvelope } from './host-create-many-user-input-envelope.input';
import { HostWhereUniqueInput } from './host-where-unique.input';

@InputType()
export class HostCreateNestedManyWithoutUserInput {

    @Field(() => [HostCreateWithoutUserInput], {nullable:true})
    @Type(() => HostCreateWithoutUserInput)
    create?: Array<HostCreateWithoutUserInput>;

    @Field(() => [HostCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => HostCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<HostCreateOrConnectWithoutUserInput>;

    @Field(() => HostCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => HostCreateManyUserInputEnvelope)
    createMany?: HostCreateManyUserInputEnvelope;

    @Field(() => [HostWhereUniqueInput], {nullable:true})
    @Type(() => HostWhereUniqueInput)
    connect?: Array<HostWhereUniqueInput>;
}
