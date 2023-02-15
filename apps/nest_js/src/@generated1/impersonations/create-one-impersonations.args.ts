import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImpersonationsCreateInput } from './impersonations-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneImpersonationsArgs {

    @Field(() => ImpersonationsCreateInput, {nullable:false})
    @Type(() => ImpersonationsCreateInput)
    data!: ImpersonationsCreateInput;
}
