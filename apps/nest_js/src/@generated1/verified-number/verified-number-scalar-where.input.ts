import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class VerifiedNumberScalarWhereInput {

    @Field(() => [VerifiedNumberScalarWhereInput], {nullable:true})
    AND?: Array<VerifiedNumberScalarWhereInput>;

    @Field(() => [VerifiedNumberScalarWhereInput], {nullable:true})
    OR?: Array<VerifiedNumberScalarWhereInput>;

    @Field(() => [VerifiedNumberScalarWhereInput], {nullable:true})
    NOT?: Array<VerifiedNumberScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: StringFilter;
}
