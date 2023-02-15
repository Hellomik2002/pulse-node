import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HostWhereUniqueInput } from './host-where-unique.input';
import { Type } from 'class-transformer';
import { HostUpdateWithoutEventTypeInput } from './host-update-without-event-type.input';

@InputType()
export class HostUpdateWithWhereUniqueWithoutEventTypeInput {

    @Field(() => HostWhereUniqueInput, {nullable:false})
    @Type(() => HostWhereUniqueInput)
    where!: HostWhereUniqueInput;

    @Field(() => HostUpdateWithoutEventTypeInput, {nullable:false})
    @Type(() => HostUpdateWithoutEventTypeInput)
    data!: HostUpdateWithoutEventTypeInput;
}
