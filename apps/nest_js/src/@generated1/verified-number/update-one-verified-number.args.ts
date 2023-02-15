import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifiedNumberUpdateInput } from './verified-number-update.input';
import { Type } from 'class-transformer';
import { VerifiedNumberWhereUniqueInput } from './verified-number-where-unique.input';

@ArgsType()
export class UpdateOneVerifiedNumberArgs {

    @Field(() => VerifiedNumberUpdateInput, {nullable:false})
    @Type(() => VerifiedNumberUpdateInput)
    data!: VerifiedNumberUpdateInput;

    @Field(() => VerifiedNumberWhereUniqueInput, {nullable:false})
    @Type(() => VerifiedNumberWhereUniqueInput)
    where!: VerifiedNumberWhereUniqueInput;
}
