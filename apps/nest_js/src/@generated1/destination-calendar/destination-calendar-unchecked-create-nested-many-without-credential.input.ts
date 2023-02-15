import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarCreateWithoutCredentialInput } from './destination-calendar-create-without-credential.input';
import { Type } from 'class-transformer';
import { DestinationCalendarCreateOrConnectWithoutCredentialInput } from './destination-calendar-create-or-connect-without-credential.input';
import { DestinationCalendarCreateManyCredentialInputEnvelope } from './destination-calendar-create-many-credential-input-envelope.input';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';

@InputType()
export class DestinationCalendarUncheckedCreateNestedManyWithoutCredentialInput {

    @Field(() => [DestinationCalendarCreateWithoutCredentialInput], {nullable:true})
    @Type(() => DestinationCalendarCreateWithoutCredentialInput)
    create?: Array<DestinationCalendarCreateWithoutCredentialInput>;

    @Field(() => [DestinationCalendarCreateOrConnectWithoutCredentialInput], {nullable:true})
    @Type(() => DestinationCalendarCreateOrConnectWithoutCredentialInput)
    connectOrCreate?: Array<DestinationCalendarCreateOrConnectWithoutCredentialInput>;

    @Field(() => DestinationCalendarCreateManyCredentialInputEnvelope, {nullable:true})
    @Type(() => DestinationCalendarCreateManyCredentialInputEnvelope)
    createMany?: DestinationCalendarCreateManyCredentialInputEnvelope;

    @Field(() => [DestinationCalendarWhereUniqueInput], {nullable:true})
    @Type(() => DestinationCalendarWhereUniqueInput)
    connect?: Array<DestinationCalendarWhereUniqueInput>;
}
