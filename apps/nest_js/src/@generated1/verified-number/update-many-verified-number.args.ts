import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifiedNumberUpdateManyMutationInput } from './verified-number-update-many-mutation.input';
import { Type } from 'class-transformer';
import { VerifiedNumberWhereInput } from './verified-number-where.input';

@ArgsType()
export class UpdateManyVerifiedNumberArgs {

    @Field(() => VerifiedNumberUpdateManyMutationInput, {nullable:false})
    @Type(() => VerifiedNumberUpdateManyMutationInput)
    data!: VerifiedNumberUpdateManyMutationInput;

    @Field(() => VerifiedNumberWhereInput, {nullable:true})
    @Type(() => VerifiedNumberWhereInput)
    where?: VerifiedNumberWhereInput;
}
