import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifiedNumberWhereUniqueInput } from './verified-number-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueVerifiedNumberArgs {

    @Field(() => VerifiedNumberWhereUniqueInput, {nullable:false})
    @Type(() => VerifiedNumberWhereUniqueInput)
    where!: VerifiedNumberWhereUniqueInput;
}
