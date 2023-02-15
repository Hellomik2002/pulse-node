import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityCreateWithoutEventTypeInput } from './availability-create-without-event-type.input';
import { Type } from 'class-transformer';
import { AvailabilityCreateOrConnectWithoutEventTypeInput } from './availability-create-or-connect-without-event-type.input';
import { AvailabilityCreateManyEventTypeInputEnvelope } from './availability-create-many-event-type-input-envelope.input';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';

@InputType()
export class AvailabilityCreateNestedManyWithoutEventTypeInput {

    @Field(() => [AvailabilityCreateWithoutEventTypeInput], {nullable:true})
    @Type(() => AvailabilityCreateWithoutEventTypeInput)
    create?: Array<AvailabilityCreateWithoutEventTypeInput>;

    @Field(() => [AvailabilityCreateOrConnectWithoutEventTypeInput], {nullable:true})
    @Type(() => AvailabilityCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: Array<AvailabilityCreateOrConnectWithoutEventTypeInput>;

    @Field(() => AvailabilityCreateManyEventTypeInputEnvelope, {nullable:true})
    @Type(() => AvailabilityCreateManyEventTypeInputEnvelope)
    createMany?: AvailabilityCreateManyEventTypeInputEnvelope;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    connect?: Array<AvailabilityWhereUniqueInput>;
}
