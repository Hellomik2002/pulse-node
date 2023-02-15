import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HostWhereUniqueInput } from './host-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueHostOrThrowArgs {

    @Field(() => HostWhereUniqueInput, {nullable:false})
    @Type(() => HostWhereUniqueInput)
    where!: HostWhereUniqueInput;
}
