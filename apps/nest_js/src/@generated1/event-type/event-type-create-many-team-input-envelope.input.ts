import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateManyTeamInput } from './event-type-create-many-team.input';
import { Type } from 'class-transformer';

@InputType()
export class EventTypeCreateManyTeamInputEnvelope {

    @Field(() => [EventTypeCreateManyTeamInput], {nullable:false})
    @Type(() => EventTypeCreateManyTeamInput)
    data!: Array<EventTypeCreateManyTeamInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
