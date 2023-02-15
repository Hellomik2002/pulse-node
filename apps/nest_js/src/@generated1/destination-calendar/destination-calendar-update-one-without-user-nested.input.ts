import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarCreateWithoutUserInput } from './destination-calendar-create-without-user.input';
import { Type } from 'class-transformer';
import { DestinationCalendarCreateOrConnectWithoutUserInput } from './destination-calendar-create-or-connect-without-user.input';
import { DestinationCalendarUpsertWithoutUserInput } from './destination-calendar-upsert-without-user.input';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';
import { DestinationCalendarUpdateWithoutUserInput } from './destination-calendar-update-without-user.input';

@InputType()
export class DestinationCalendarUpdateOneWithoutUserNestedInput {

    @Field(() => DestinationCalendarCreateWithoutUserInput, {nullable:true})
    @Type(() => DestinationCalendarCreateWithoutUserInput)
    create?: DestinationCalendarCreateWithoutUserInput;

    @Field(() => DestinationCalendarCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => DestinationCalendarCreateOrConnectWithoutUserInput)
    connectOrCreate?: DestinationCalendarCreateOrConnectWithoutUserInput;

    @Field(() => DestinationCalendarUpsertWithoutUserInput, {nullable:true})
    @Type(() => DestinationCalendarUpsertWithoutUserInput)
    upsert?: DestinationCalendarUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => DestinationCalendarWhereUniqueInput, {nullable:true})
    @Type(() => DestinationCalendarWhereUniqueInput)
    connect?: DestinationCalendarWhereUniqueInput;

    @Field(() => DestinationCalendarUpdateWithoutUserInput, {nullable:true})
    @Type(() => DestinationCalendarUpdateWithoutUserInput)
    update?: DestinationCalendarUpdateWithoutUserInput;
}
