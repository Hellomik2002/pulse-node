import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppUpdateInput } from './app-update.input';
import { Type } from 'class-transformer';
import { AppWhereUniqueInput } from './app-where-unique.input';

@ArgsType()
export class UpdateOneAppArgs {

    @Field(() => AppUpdateInput, {nullable:false})
    @Type(() => AppUpdateInput)
    data!: AppUpdateInput;

    @Field(() => AppWhereUniqueInput, {nullable:false})
    @Type(() => AppWhereUniqueInput)
    where!: AppWhereUniqueInput;
}
