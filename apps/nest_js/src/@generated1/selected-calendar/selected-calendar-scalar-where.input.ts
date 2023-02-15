import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class SelectedCalendarScalarWhereInput {

    @Field(() => [SelectedCalendarScalarWhereInput], {nullable:true})
    AND?: Array<SelectedCalendarScalarWhereInput>;

    @Field(() => [SelectedCalendarScalarWhereInput], {nullable:true})
    OR?: Array<SelectedCalendarScalarWhereInput>;

    @Field(() => [SelectedCalendarScalarWhereInput], {nullable:true})
    NOT?: Array<SelectedCalendarScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    integration?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    externalId?: StringFilter;
}
