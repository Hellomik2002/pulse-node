import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HostWhereUniqueInput } from './host-where-unique.input';
import { Type } from 'class-transformer';
import { HostCreateWithoutEventTypeInput } from './host-create-without-event-type.input';

@InputType()
export class HostCreateOrConnectWithoutEventTypeInput {

    @Field(() => HostWhereUniqueInput, {nullable:false})
    @Type(() => HostWhereUniqueInput)
    where!: HostWhereUniqueInput;

    @Field(() => HostCreateWithoutEventTypeInput, {nullable:false})
    @Type(() => HostCreateWithoutEventTypeInput)
    create!: HostCreateWithoutEventTypeInput;
}
