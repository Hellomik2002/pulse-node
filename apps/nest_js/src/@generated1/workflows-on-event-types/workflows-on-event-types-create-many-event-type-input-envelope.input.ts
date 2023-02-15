import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowsOnEventTypesCreateManyEventTypeInput } from './workflows-on-event-types-create-many-event-type.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkflowsOnEventTypesCreateManyEventTypeInputEnvelope {

    @Field(() => [WorkflowsOnEventTypesCreateManyEventTypeInput], {nullable:false})
    @Type(() => WorkflowsOnEventTypesCreateManyEventTypeInput)
    data!: Array<WorkflowsOnEventTypesCreateManyEventTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
