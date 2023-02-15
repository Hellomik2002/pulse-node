import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { Type } from 'class-transformer';
import { AppCreateInput } from './app-create.input';
import { AppUpdateInput } from './app-update.input';

@ArgsType()
export class UpsertOneAppArgs {

    @Field(() => AppWhereUniqueInput, {nullable:false})
    @Type(() => AppWhereUniqueInput)
    where!: AppWhereUniqueInput;

    @Field(() => AppCreateInput, {nullable:false})
    @Type(() => AppCreateInput)
    create!: AppCreateInput;

    @Field(() => AppUpdateInput, {nullable:false})
    @Type(() => AppUpdateInput)
    update!: AppUpdateInput;
}
