import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HostWhereUniqueInput } from './host-where-unique.input';
import { Type } from 'class-transformer';
import { HostUpdateWithoutEventTypeInput } from './host-update-without-event-type.input';
import { HostCreateWithoutEventTypeInput } from './host-create-without-event-type.input';

@InputType()
export class HostUpsertWithWhereUniqueWithoutEventTypeInput {

    @Field(() => HostWhereUniqueInput, {nullable:false})
    @Type(() => HostWhereUniqueInput)
    where!: HostWhereUniqueInput;

    @Field(() => HostUpdateWithoutEventTypeInput, {nullable:false})
    @Type(() => HostUpdateWithoutEventTypeInput)
    update!: HostUpdateWithoutEventTypeInput;

    @Field(() => HostCreateWithoutEventTypeInput, {nullable:false})
    @Type(() => HostCreateWithoutEventTypeInput)
    create!: HostCreateWithoutEventTypeInput;
}
