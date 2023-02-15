import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendeeWhereInput } from './attendee-where.input';
import { Type } from 'class-transformer';
import { AttendeeOrderByWithAggregationInput } from './attendee-order-by-with-aggregation.input';
import { AttendeeScalarFieldEnum } from './attendee-scalar-field.enum';
import { AttendeeScalarWhereWithAggregatesInput } from './attendee-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AttendeeCountAggregateInput } from './attendee-count-aggregate.input';
import { AttendeeAvgAggregateInput } from './attendee-avg-aggregate.input';
import { AttendeeSumAggregateInput } from './attendee-sum-aggregate.input';
import { AttendeeMinAggregateInput } from './attendee-min-aggregate.input';
import { AttendeeMaxAggregateInput } from './attendee-max-aggregate.input';

@ArgsType()
export class AttendeeGroupByArgs {

    @Field(() => AttendeeWhereInput, {nullable:true})
    @Type(() => AttendeeWhereInput)
    where?: AttendeeWhereInput;

    @Field(() => [AttendeeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AttendeeOrderByWithAggregationInput>;

    @Field(() => [AttendeeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AttendeeScalarFieldEnum>;

    @Field(() => AttendeeScalarWhereWithAggregatesInput, {nullable:true})
    having?: AttendeeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AttendeeCountAggregateInput, {nullable:true})
    _count?: AttendeeCountAggregateInput;

    @Field(() => AttendeeAvgAggregateInput, {nullable:true})
    _avg?: AttendeeAvgAggregateInput;

    @Field(() => AttendeeSumAggregateInput, {nullable:true})
    _sum?: AttendeeSumAggregateInput;

    @Field(() => AttendeeMinAggregateInput, {nullable:true})
    _min?: AttendeeMinAggregateInput;

    @Field(() => AttendeeMaxAggregateInput, {nullable:true})
    _max?: AttendeeMaxAggregateInput;
}
