import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReminderMailCountAggregate } from './reminder-mail-count-aggregate.output';
import { ReminderMailAvgAggregate } from './reminder-mail-avg-aggregate.output';
import { ReminderMailSumAggregate } from './reminder-mail-sum-aggregate.output';
import { ReminderMailMinAggregate } from './reminder-mail-min-aggregate.output';
import { ReminderMailMaxAggregate } from './reminder-mail-max-aggregate.output';

@ObjectType()
export class AggregateReminderMail {

    @Field(() => ReminderMailCountAggregate, {nullable:true})
    _count?: ReminderMailCountAggregate;

    @Field(() => ReminderMailAvgAggregate, {nullable:true})
    _avg?: ReminderMailAvgAggregate;

    @Field(() => ReminderMailSumAggregate, {nullable:true})
    _sum?: ReminderMailSumAggregate;

    @Field(() => ReminderMailMinAggregate, {nullable:true})
    _min?: ReminderMailMinAggregate;

    @Field(() => ReminderMailMaxAggregate, {nullable:true})
    _max?: ReminderMailMaxAggregate;
}
