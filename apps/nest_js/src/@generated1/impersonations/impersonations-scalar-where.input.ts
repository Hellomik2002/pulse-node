import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ImpersonationsScalarWhereInput {

    @Field(() => [ImpersonationsScalarWhereInput], {nullable:true})
    AND?: Array<ImpersonationsScalarWhereInput>;

    @Field(() => [ImpersonationsScalarWhereInput], {nullable:true})
    OR?: Array<ImpersonationsScalarWhereInput>;

    @Field(() => [ImpersonationsScalarWhereInput], {nullable:true})
    NOT?: Array<ImpersonationsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    impersonatedUserId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    impersonatedById?: IntFilter;
}
