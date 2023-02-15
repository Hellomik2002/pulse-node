import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarCreateWithoutCredentialInput } from './destination-calendar-create-without-credential.input';
import { Type } from 'class-transformer';
import { DestinationCalendarCreateOrConnectWithoutCredentialInput } from './destination-calendar-create-or-connect-without-credential.input';
import { DestinationCalendarUpsertWithWhereUniqueWithoutCredentialInput } from './destination-calendar-upsert-with-where-unique-without-credential.input';
import { DestinationCalendarCreateManyCredentialInputEnvelope } from './destination-calendar-create-many-credential-input-envelope.input';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';
import { DestinationCalendarUpdateWithWhereUniqueWithoutCredentialInput } from './destination-calendar-update-with-where-unique-without-credential.input';
import { DestinationCalendarUpdateManyWithWhereWithoutCredentialInput } from './destination-calendar-update-many-with-where-without-credential.input';
import { DestinationCalendarScalarWhereInput } from './destination-calendar-scalar-where.input';

@InputType()
export class DestinationCalendarUpdateManyWithoutCredentialNestedInput {

    @Field(() => [DestinationCalendarCreateWithoutCredentialInput], {nullable:true})
    @Type(() => DestinationCalendarCreateWithoutCredentialInput)
    create?: Array<DestinationCalendarCreateWithoutCredentialInput>;

    @Field(() => [DestinationCalendarCreateOrConnectWithoutCredentialInput], {nullable:true})
    @Type(() => DestinationCalendarCreateOrConnectWithoutCredentialInput)
    connectOrCreate?: Array<DestinationCalendarCreateOrConnectWithoutCredentialInput>;

    @Field(() => [DestinationCalendarUpsertWithWhereUniqueWithoutCredentialInput], {nullable:true})
    @Type(() => DestinationCalendarUpsertWithWhereUniqueWithoutCredentialInput)
    upsert?: Array<DestinationCalendarUpsertWithWhereUniqueWithoutCredentialInput>;

    @Field(() => DestinationCalendarCreateManyCredentialInputEnvelope, {nullable:true})
    @Type(() => DestinationCalendarCreateManyCredentialInputEnvelope)
    createMany?: DestinationCalendarCreateManyCredentialInputEnvelope;

    @Field(() => [DestinationCalendarWhereUniqueInput], {nullable:true})
    @Type(() => DestinationCalendarWhereUniqueInput)
    set?: Array<DestinationCalendarWhereUniqueInput>;

    @Field(() => [DestinationCalendarWhereUniqueInput], {nullable:true})
    @Type(() => DestinationCalendarWhereUniqueInput)
    disconnect?: Array<DestinationCalendarWhereUniqueInput>;

    @Field(() => [DestinationCalendarWhereUniqueInput], {nullable:true})
    @Type(() => DestinationCalendarWhereUniqueInput)
    delete?: Array<DestinationCalendarWhereUniqueInput>;

    @Field(() => [DestinationCalendarWhereUniqueInput], {nullable:true})
    @Type(() => DestinationCalendarWhereUniqueInput)
    connect?: Array<DestinationCalendarWhereUniqueInput>;

    @Field(() => [DestinationCalendarUpdateWithWhereUniqueWithoutCredentialInput], {nullable:true})
    @Type(() => DestinationCalendarUpdateWithWhereUniqueWithoutCredentialInput)
    update?: Array<DestinationCalendarUpdateWithWhereUniqueWithoutCredentialInput>;

    @Field(() => [DestinationCalendarUpdateManyWithWhereWithoutCredentialInput], {nullable:true})
    @Type(() => DestinationCalendarUpdateManyWithWhereWithoutCredentialInput)
    updateMany?: Array<DestinationCalendarUpdateManyWithWhereWithoutCredentialInput>;

    @Field(() => [DestinationCalendarScalarWhereInput], {nullable:true})
    @Type(() => DestinationCalendarScalarWhereInput)
    deleteMany?: Array<DestinationCalendarScalarWhereInput>;
}
