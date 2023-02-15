import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DestinationCalendarUpdateManyMutationInput } from './destination-calendar-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DestinationCalendarWhereInput } from './destination-calendar-where.input';

@ArgsType()
export class UpdateManyDestinationCalendarArgs {

    @Field(() => DestinationCalendarUpdateManyMutationInput, {nullable:false})
    @Type(() => DestinationCalendarUpdateManyMutationInput)
    data!: DestinationCalendarUpdateManyMutationInput;

    @Field(() => DestinationCalendarWhereInput, {nullable:true})
    @Type(() => DestinationCalendarWhereInput)
    where?: DestinationCalendarWhereInput;
}
