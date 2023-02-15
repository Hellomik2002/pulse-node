import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HostWhereUniqueInput } from './host-where-unique.input';
import { Type } from 'class-transformer';
import { HostCreateWithoutUserInput } from './host-create-without-user.input';

@InputType()
export class HostCreateOrConnectWithoutUserInput {

    @Field(() => HostWhereUniqueInput, {nullable:false})
    @Type(() => HostWhereUniqueInput)
    where!: HostWhereUniqueInput;

    @Field(() => HostCreateWithoutUserInput, {nullable:false})
    @Type(() => HostCreateWithoutUserInput)
    create!: HostCreateWithoutUserInput;
}
