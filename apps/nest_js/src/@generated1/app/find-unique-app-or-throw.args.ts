import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAppOrThrowArgs {

    @Field(() => AppWhereUniqueInput, {nullable:false})
    @Type(() => AppWhereUniqueInput)
    where!: AppWhereUniqueInput;
}
