import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarCreateWithoutEventTypeInput } from './destination-calendar-create-without-event-type.input';
import { Type } from 'class-transformer';
import { DestinationCalendarCreateOrConnectWithoutEventTypeInput } from './destination-calendar-create-or-connect-without-event-type.input';
import { DestinationCalendarUpsertWithoutEventTypeInput } from './destination-calendar-upsert-without-event-type.input';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';
import { DestinationCalendarUpdateWithoutEventTypeInput } from './destination-calendar-update-without-event-type.input';

@InputType()
export class DestinationCalendarUpdateOneWithoutEventTypeNestedInput {

    @Field(() => DestinationCalendarCreateWithoutEventTypeInput, {nullable:true})
    @Type(() => DestinationCalendarCreateWithoutEventTypeInput)
    create?: DestinationCalendarCreateWithoutEventTypeInput;

    @Field(() => DestinationCalendarCreateOrConnectWithoutEventTypeInput, {nullable:true})
    @Type(() => DestinationCalendarCreateOrConnectWithoutEventTypeInput)
    connectOrCreate?: DestinationCalendarCreateOrConnectWithoutEventTypeInput;

    @Field(() => DestinationCalendarUpsertWithoutEventTypeInput, {nullable:true})
    @Type(() => DestinationCalendarUpsertWithoutEventTypeInput)
    upsert?: DestinationCalendarUpsertWithoutEventTypeInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => DestinationCalendarWhereUniqueInput, {nullable:true})
    @Type(() => DestinationCalendarWhereUniqueInput)
    connect?: DestinationCalendarWhereUniqueInput;

    @Field(() => DestinationCalendarUpdateWithoutEventTypeInput, {nullable:true})
    @Type(() => DestinationCalendarUpdateWithoutEventTypeInput)
    update?: DestinationCalendarUpdateWithoutEventTypeInput;
}
