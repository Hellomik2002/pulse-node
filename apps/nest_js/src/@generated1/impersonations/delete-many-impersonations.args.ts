import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImpersonationsWhereInput } from './impersonations-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyImpersonationsArgs {

    @Field(() => ImpersonationsWhereInput, {nullable:true})
    @Type(() => ImpersonationsWhereInput)
    where?: ImpersonationsWhereInput;
}
