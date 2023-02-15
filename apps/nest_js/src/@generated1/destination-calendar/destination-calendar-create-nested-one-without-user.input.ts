import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarCreateWithoutUserInput } from './destination-calendar-create-without-user.input';
import { Type } from 'class-transformer';
import { DestinationCalendarCreateOrConnectWithoutUserInput } from './destination-calendar-create-or-connect-without-user.input';
import { DestinationCalendarWhereUniqueInput } from './destination-calendar-where-unique.input';

@InputType()
export class DestinationCalendarCreateNestedOneWithoutUserInput {

    @Field(() => DestinationCalendarCreateWithoutUserInput, {nullable:true})
    @Type(() => DestinationCalendarCreateWithoutUserInput)
    create?: DestinationCalendarCreateWithoutUserInput;

    @Field(() => DestinationCalendarCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => DestinationCalendarCreateOrConnectWithoutUserInput)
    connectOrCreate?: DestinationCalendarCreateOrConnectWithoutUserInput;

    @Field(() => DestinationCalendarWhereUniqueInput, {nullable:true})
    @Type(() => DestinationCalendarWhereUniqueInput)
    connect?: DestinationCalendarWhereUniqueInput;
}
