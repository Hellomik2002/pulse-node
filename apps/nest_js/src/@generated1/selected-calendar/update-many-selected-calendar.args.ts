import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SelectedCalendarUpdateManyMutationInput } from './selected-calendar-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SelectedCalendarWhereInput } from './selected-calendar-where.input';

@ArgsType()
export class UpdateManySelectedCalendarArgs {

    @Field(() => SelectedCalendarUpdateManyMutationInput, {nullable:false})
    @Type(() => SelectedCalendarUpdateManyMutationInput)
    data!: SelectedCalendarUpdateManyMutationInput;

    @Field(() => SelectedCalendarWhereInput, {nullable:true})
    @Type(() => SelectedCalendarWhereInput)
    where?: SelectedCalendarWhereInput;
}
