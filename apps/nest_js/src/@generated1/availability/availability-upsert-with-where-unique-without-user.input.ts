import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityUpdateWithoutUserInput } from './availability-update-without-user.input';
import { AvailabilityCreateWithoutUserInput } from './availability-create-without-user.input';

@InputType()
export class AvailabilityUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => AvailabilityWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityWhereUniqueInput)
    where!: AvailabilityWhereUniqueInput;

    @Field(() => AvailabilityUpdateWithoutUserInput, {nullable:false})
    @Type(() => AvailabilityUpdateWithoutUserInput)
    update!: AvailabilityUpdateWithoutUserInput;

    @Field(() => AvailabilityCreateWithoutUserInput, {nullable:false})
    @Type(() => AvailabilityCreateWithoutUserInput)
    create!: AvailabilityCreateWithoutUserInput;
}
