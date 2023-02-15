import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HostWhereInput } from './host-where.input';
import { Type } from 'class-transformer';
import { HostOrderByWithAggregationInput } from './host-order-by-with-aggregation.input';
import { HostScalarFieldEnum } from './host-scalar-field.enum';
import { HostScalarWhereWithAggregatesInput } from './host-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HostCountAggregateInput } from './host-count-aggregate.input';
import { HostAvgAggregateInput } from './host-avg-aggregate.input';
import { HostSumAggregateInput } from './host-sum-aggregate.input';
import { HostMinAggregateInput } from './host-min-aggregate.input';
import { HostMaxAggregateInput } from './host-max-aggregate.input';

@ArgsType()
export class HostGroupByArgs {

    @Field(() => HostWhereInput, {nullable:true})
    @Type(() => HostWhereInput)
    where?: HostWhereInput;

    @Field(() => [HostOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HostOrderByWithAggregationInput>;

    @Field(() => [HostScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HostScalarFieldEnum>;

    @Field(() => HostScalarWhereWithAggregatesInput, {nullable:true})
    having?: HostScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HostCountAggregateInput, {nullable:true})
    _count?: HostCountAggregateInput;

    @Field(() => HostAvgAggregateInput, {nullable:true})
    _avg?: HostAvgAggregateInput;

    @Field(() => HostSumAggregateInput, {nullable:true})
    _sum?: HostSumAggregateInput;

    @Field(() => HostMinAggregateInput, {nullable:true})
    _min?: HostMinAggregateInput;

    @Field(() => HostMaxAggregateInput, {nullable:true})
    _max?: HostMaxAggregateInput;
}
