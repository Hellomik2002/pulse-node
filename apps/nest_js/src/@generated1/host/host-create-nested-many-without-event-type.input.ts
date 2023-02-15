import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HostCreateWithoutEventTypeInput } from './host-create-without-event-type.input';
import { Type } from 'class-transformer';
import { HostCreateOrConnectWithoutEventTypeInput } from './host-create-or-connect-without-event-type.input';
import { HostCreateManyEventTypeInputEnvelope } from './host-create-many-event-type-input-envelope.input';
import { HostWhereUniqueInput } from './host-where-unique.input';

@InputType()
export class HostCreateNestedManyWithoutEventTypeInput {

    @Field(() => [HostCreateWithoutEventTypeInput], {nullable:true})
    @Type(() => HostCreateWithoutEventTypeInput)
    create?: Array<HostCreateWithoutEventTypeInput>;

    @Field(() => [HostCreateOrConnectWithoutEventTypeInput], {nullable:true})
    @Type(() => HostCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: Array<HostCreateOrConnectWithoutEventTypeInput>;

    @Field(() => HostCreateManyEventTypeInputEnvelope, {nullable:true})
    @Type(() => HostCreateManyEventTypeInputEnvelope)
    createMany?: HostCreateManyEventTypeInputEnvelope;

    @Field(() => [HostWhereUniqueInput], {nullable:true})
    @Type(() => HostWhereUniqueInput)
    connect?: Array<HostWhereUniqueInput>;
}
