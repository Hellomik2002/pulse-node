import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SelectedCalendarScalarWhereInput } from './selected-calendar-scalar-where.input';
import { Type } from 'class-transformer';
import { SelectedCalendarUpdateManyMutationInput } from './selected-calendar-update-many-mutation.input';

@InputType()
export class SelectedCalendarUpdateManyWithWhereWithoutUserInput {

    @Field(() => SelectedCalendarScalarWhereInput, {nullable:false})
    @Type(() => SelectedCalendarScalarWhereInput)
    where!: SelectedCalendarScalarWhereInput;

    @Field(() => SelectedCalendarUpdateManyMutationInput, {nullable:false})
    @Type(() => SelectedCalendarUpdateManyMutationInput)
    data!: SelectedCalendarUpdateManyMutationInput;
}
