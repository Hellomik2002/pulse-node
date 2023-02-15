import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifiedNumberCreateInput } from './verified-number-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneVerifiedNumberArgs {

    @Field(() => VerifiedNumberCreateInput, {nullable:false})
    @Type(() => VerifiedNumberCreateInput)
    data!: VerifiedNumberCreateInput;
}
