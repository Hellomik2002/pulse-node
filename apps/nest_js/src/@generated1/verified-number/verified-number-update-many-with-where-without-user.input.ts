import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerifiedNumberScalarWhereInput } from './verified-number-scalar-where.input';
import { Type } from 'class-transformer';
import { VerifiedNumberUpdateManyMutationInput } from './verified-number-update-many-mutation.input';

@InputType()
export class VerifiedNumberUpdateManyWithWhereWithoutUserInput {

    @Field(() => VerifiedNumberScalarWhereInput, {nullable:false})
    @Type(() => VerifiedNumberScalarWhereInput)
    where!: VerifiedNumberScalarWhereInput;

    @Field(() => VerifiedNumberUpdateManyMutationInput, {nullable:false})
    @Type(() => VerifiedNumberUpdateManyMutationInput)
    data!: VerifiedNumberUpdateManyMutationInput;
}
