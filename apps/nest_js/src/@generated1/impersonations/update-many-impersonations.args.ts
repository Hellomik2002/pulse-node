import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImpersonationsUpdateManyMutationInput } from './impersonations-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ImpersonationsWhereInput } from './impersonations-where.input';

@ArgsType()
export class UpdateManyImpersonationsArgs {

    @Field(() => ImpersonationsUpdateManyMutationInput, {nullable:false})
    @Type(() => ImpersonationsUpdateManyMutationInput)
    data!: ImpersonationsUpdateManyMutationInput;

    @Field(() => ImpersonationsWhereInput, {nullable:true})
    @Type(() => ImpersonationsWhereInput)
    where?: ImpersonationsWhereInput;
}
