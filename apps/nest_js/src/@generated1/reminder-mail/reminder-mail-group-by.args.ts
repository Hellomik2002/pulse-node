import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReminderMailWhereInput } from './reminder-mail-where.input';
import { Type } from 'class-transformer';
import { ReminderMailOrderByWithAggregationInput } from './reminder-mail-order-by-with-aggregation.input';
import { ReminderMailScalarFieldEnum } from './reminder-mail-scalar-field.enum';
import { ReminderMailScalarWhereWithAggregatesInput } from './reminder-mail-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReminderMailCountAggregateInput } from './reminder-mail-count-aggregate.input';
import { ReminderMailAvgAggregateInput } from './reminder-mail-avg-aggregate.input';
import { ReminderMailSumAggregateInput } from './reminder-mail-sum-aggregate.input';
import { ReminderMailMinAggregateInput } from './reminder-mail-min-aggregate.input';
import { ReminderMailMaxAggregateInput } from './reminder-mail-max-aggregate.input';

@ArgsType()
export class ReminderMailGroupByArgs {

    @Field(() => ReminderMailWhereInput, {nullable:true})
    @Type(() => ReminderMailWhereInput)
    where?: ReminderMailWhereInput;

    @Field(() => [ReminderMailOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReminderMailOrderByWithAggregationInput>;

    @Field(() => [ReminderMailScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReminderMailScalarFieldEnum>;

    @Field(() => ReminderMailScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReminderMailScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReminderMailCountAggregateInput, {nullable:true})
    _count?: ReminderMailCountAggregateInput;

    @Field(() => ReminderMailAvgAggregateInput, {nullable:true})
    _avg?: ReminderMailAvgAggregateInput;

    @Field(() => ReminderMailSumAggregateInput, {nullable:true})
    _sum?: ReminderMailSumAggregateInput;

    @Field(() => ReminderMailMinAggregateInput, {nullable:true})
    _min?: ReminderMailMinAggregateInput;

    @Field(() => ReminderMailMaxAggregateInput, {nullable:true})
    _max?: ReminderMailMaxAggregateInput;
}
