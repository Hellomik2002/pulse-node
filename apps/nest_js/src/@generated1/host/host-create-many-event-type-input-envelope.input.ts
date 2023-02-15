import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HostCreateManyEventTypeInput } from './host-create-many-event-type.input';
import { Type } from 'class-transformer';

@InputType()
export class HostCreateManyEventTypeInputEnvelope {

    @Field(() => [HostCreateManyEventTypeInput], {nullable:false})
    @Type(() => HostCreateManyEventTypeInput)
    data!: Array<HostCreateManyEventTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
