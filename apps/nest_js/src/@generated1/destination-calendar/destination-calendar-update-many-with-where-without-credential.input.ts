import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarScalarWhereInput } from './destination-calendar-scalar-where.input';
import { Type } from 'class-transformer';
import { DestinationCalendarUpdateManyMutationInput } from './destination-calendar-update-many-mutation.input';

@InputType()
export class DestinationCalendarUpdateManyWithWhereWithoutCredentialInput {

    @Field(() => DestinationCalendarScalarWhereInput, {nullable:false})
    @Type(() => DestinationCalendarScalarWhereInput)
    where!: DestinationCalendarScalarWhereInput;

    @Field(() => DestinationCalendarUpdateManyMutationInput, {nullable:false})
    @Type(() => DestinationCalendarUpdateManyMutationInput)
    data!: DestinationCalendarUpdateManyMutationInput;
}
