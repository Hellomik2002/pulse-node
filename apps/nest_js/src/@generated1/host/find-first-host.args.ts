import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HostWhereInput } from './host-where.input';
import { Type } from 'class-transformer';
import { HostOrderByWithRelationInput } from './host-order-by-with-relation.input';
import { HostWhereUniqueInput } from './host-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HostScalarFieldEnum } from './host-scalar-field.enum';

@ArgsType()
export class FindFirstHostArgs {

    @Field(() => HostWhereInput, {nullable:true})
    @Type(() => HostWhereInput)
    where?: HostWhereInput;

    @Field(() => [HostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HostOrderByWithRelationInput>;

    @Field(() => HostWhereUniqueInput, {nullable:true})
    cursor?: HostWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HostScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HostScalarFieldEnum>;
}
