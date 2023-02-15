import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifiedNumberWhereInput } from './verified-number-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyVerifiedNumberArgs {

    @Field(() => VerifiedNumberWhereInput, {nullable:true})
    @Type(() => VerifiedNumberWhereInput)
    where?: VerifiedNumberWhereInput;
}
