import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class HostScalarWhereInput {

    @Field(() => [HostScalarWhereInput], {nullable:true})
    AND?: Array<HostScalarWhereInput>;

    @Field(() => [HostScalarWhereInput], {nullable:true})
    OR?: Array<HostScalarWhereInput>;

    @Field(() => [HostScalarWhereInput], {nullable:true})
    NOT?: Array<HostScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    eventTypeId?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    isFixed?: BoolFilter;
}
