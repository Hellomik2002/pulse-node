import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityUpdateWithoutUserInput } from './availability-update-without-user.input';

@InputType()
export class AvailabilityUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => AvailabilityWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityWhereUniqueInput)
    where!: AvailabilityWhereUniqueInput;

    @Field(() => AvailabilityUpdateWithoutUserInput, {nullable:false})
    @Type(() => AvailabilityUpdateWithoutUserInput)
    data!: AvailabilityUpdateWithoutUserInput;
}
