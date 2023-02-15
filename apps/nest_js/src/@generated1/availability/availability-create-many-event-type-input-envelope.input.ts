import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityCreateManyEventTypeInput } from './availability-create-many-event-type.input';
import { Type } from 'class-transformer';

@InputType()
export class AvailabilityCreateManyEventTypeInputEnvelope {

    @Field(() => [AvailabilityCreateManyEventTypeInput], {nullable:false})
    @Type(() => AvailabilityCreateManyEventTypeInput)
    data!: Array<AvailabilityCreateManyEventTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
