import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityCreateManyScheduleInput } from './availability-create-many-schedule.input';
import { Type } from 'class-transformer';

@InputType()
export class AvailabilityCreateManyScheduleInputEnvelope {

    @Field(() => [AvailabilityCreateManyScheduleInput], {nullable:false})
    @Type(() => AvailabilityCreateManyScheduleInput)
    data!: Array<AvailabilityCreateManyScheduleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
