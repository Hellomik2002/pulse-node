import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerifiedNumberWhereInput } from './verified-number-where.input';

@InputType()
export class VerifiedNumberListRelationFilter {

    @Field(() => VerifiedNumberWhereInput, {nullable:true})
    every?: VerifiedNumberWhereInput;

    @Field(() => VerifiedNumberWhereInput, {nullable:true})
    some?: VerifiedNumberWhereInput;

    @Field(() => VerifiedNumberWhereInput, {nullable:true})
    none?: VerifiedNumberWhereInput;
}
