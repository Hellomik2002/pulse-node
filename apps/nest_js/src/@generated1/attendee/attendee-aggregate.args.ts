import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendeeWhereInput } from './attendee-where.input';
import { Type } from 'class-transformer';
import { AttendeeOrderByWithRelationInput } from './attendee-order-by-with-relation.input';
import { AttendeeWhereUniqueInput } from './attendee-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AttendeeCountAggregateInput } from './attendee-count-aggregate.input';
import { AttendeeAvgAggregateInput } from './attendee-avg-aggregate.input';
import { AttendeeSumAggregateInput } from './attendee-sum-aggregate.input';
import { AttendeeMinAggregateInput } from './attendee-min-aggregate.input';
import { AttendeeMaxAggregateInput } from './attendee-max-aggregate.input';

@ArgsType()
export class AttendeeAggregateArgs {

    @Field(() => AttendeeWhereInput, {nullable:true})
    @Type(() => AttendeeWhereInput)
    where?: AttendeeWhereInput;

    @Field(() => [AttendeeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AttendeeOrderByWithRelationInput>;

    @Field(() => AttendeeWhereUniqueInput, {nullable:true})
    cursor?: AttendeeWhereUniqueInput;

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
