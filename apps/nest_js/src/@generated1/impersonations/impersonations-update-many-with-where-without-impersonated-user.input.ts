import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImpersonationsScalarWhereInput } from './impersonations-scalar-where.input';
import { Type } from 'class-transformer';
import { ImpersonationsUpdateManyMutationInput } from './impersonations-update-many-mutation.input';

@InputType()
export class ImpersonationsUpdateManyWithWhereWithoutImpersonatedUserInput {

    @Field(() => ImpersonationsScalarWhereInput, {nullable:false})
    @Type(() => ImpersonationsScalarWhereInput)
    where!: ImpersonationsScalarWhereInput;

    @Field(() => ImpersonationsUpdateManyMutationInput, {nullable:false})
    @Type(() => ImpersonationsUpdateManyMutationInput)
    data!: ImpersonationsUpdateManyMutationInput;
}
