import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifiedNumberCreateManyInput } from './verified-number-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVerifiedNumberArgs {

    @Field(() => [VerifiedNumberCreateManyInput], {nullable:false})
    @Type(() => VerifiedNumberCreateManyInput)
    data!: Array<VerifiedNumberCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
