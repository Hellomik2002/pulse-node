import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImpersonationsCreateManyInput } from './impersonations-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyImpersonationsArgs {

    @Field(() => [ImpersonationsCreateManyInput], {nullable:false})
    @Type(() => ImpersonationsCreateManyInput)
    data!: Array<ImpersonationsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
