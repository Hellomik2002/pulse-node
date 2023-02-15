import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifiedNumberWhereUniqueInput } from './verified-number-where-unique.input';
import { Type } from 'class-transformer';
import { VerifiedNumberCreateInput } from './verified-number-create.input';
import { VerifiedNumberUpdateInput } from './verified-number-update.input';

@ArgsType()
export class UpsertOneVerifiedNumberArgs {

    @Field(() => VerifiedNumberWhereUniqueInput, {nullable:false})
    @Type(() => VerifiedNumberWhereUniqueInput)
    where!: VerifiedNumberWhereUniqueInput;

    @Field(() => VerifiedNumberCreateInput, {nullable:false})
    @Type(() => VerifiedNumberCreateInput)
    create!: VerifiedNumberCreateInput;

    @Field(() => VerifiedNumberUpdateInput, {nullable:false})
    @Type(() => VerifiedNumberUpdateInput)
    update!: VerifiedNumberUpdateInput;
}
