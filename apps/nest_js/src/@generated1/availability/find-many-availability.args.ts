import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityWhereInput } from './availability-where.input';
import { Type } from 'class-transformer';
import { AvailabilityOrderByWithRelationInput } from './availability-order-by-with-relation.input';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AvailabilityScalarFieldEnum } from './availability-scalar-field.enum';

@ArgsType()
export class FindManyAvailabilityArgs {

    @Field(() => AvailabilityWhereInput, {nullable:true})
    @Type(() => AvailabilityWhereInput)
    where?: AvailabilityWhereInput;

    @Field(() => [AvailabilityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AvailabilityOrderByWithRelationInput>;

    @Field(() => AvailabilityWhereUniqueInput, {nullable:true})
    cursor?: AvailabilityWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AvailabilityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AvailabilityScalarFieldEnum>;
}
