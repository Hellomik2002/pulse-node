import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CredentialWhereInput } from './credential-where.input';
import { Type } from 'class-transformer';
import { CredentialOrderByWithAggregationInput } from './credential-order-by-with-aggregation.input';
import { CredentialScalarFieldEnum } from './credential-scalar-field.enum';
import { CredentialScalarWhereWithAggregatesInput } from './credential-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CredentialCountAggregateInput } from './credential-count-aggregate.input';
import { CredentialAvgAggregateInput } from './credential-avg-aggregate.input';
import { CredentialSumAggregateInput } from './credential-sum-aggregate.input';
import { CredentialMinAggregateInput } from './credential-min-aggregate.input';
import { CredentialMaxAggregateInput } from './credential-max-aggregate.input';

@ArgsType()
export class CredentialGroupByArgs {

    @Field(() => CredentialWhereInput, {nullable:true})
    @Type(() => CredentialWhereInput)
    where?: CredentialWhereInput;

    @Field(() => [CredentialOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CredentialOrderByWithAggregationInput>;

    @Field(() => [CredentialScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CredentialScalarFieldEnum>;

    @Field(() => CredentialScalarWhereWithAggregatesInput, {nullable:true})
    having?: CredentialScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CredentialCountAggregateInput, {nullable:true})
    _count?: CredentialCountAggregateInput;

    @Field(() => CredentialAvgAggregateInput, {nullable:true})
    _avg?: CredentialAvgAggregateInput;

    @Field(() => CredentialSumAggregateInput, {nullable:true})
    _sum?: CredentialSumAggregateInput;

    @Field(() => CredentialMinAggregateInput, {nullable:true})
    _min?: CredentialMinAggregateInput;

    @Field(() => CredentialMaxAggregateInput, {nullable:true})
    _max?: CredentialMaxAggregateInput;
}
