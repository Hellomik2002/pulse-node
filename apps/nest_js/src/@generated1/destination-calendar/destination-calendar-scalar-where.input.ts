import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class DestinationCalendarScalarWhereInput {

    @Field(() => [DestinationCalendarScalarWhereInput], {nullable:true})
    AND?: Array<DestinationCalendarScalarWhereInput>;

    @Field(() => [DestinationCalendarScalarWhereInput], {nullable:true})
    OR?: Array<DestinationCalendarScalarWhereInput>;

    @Field(() => [DestinationCalendarScalarWhereInput], {nullable:true})
    NOT?: Array<DestinationCalendarScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    integration?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    externalId?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    eventTypeId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    credentialId?: IntNullableFilter;
}
