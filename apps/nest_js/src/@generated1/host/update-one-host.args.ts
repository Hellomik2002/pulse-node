import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HostUpdateInput } from './host-update.input';
import { Type } from 'class-transformer';
import { HostWhereUniqueInput } from './host-where-unique.input';

@ArgsType()
export class UpdateOneHostArgs {

    @Field(() => HostUpdateInput, {nullable:false})
    @Type(() => HostUpdateInput)
    data!: HostUpdateInput;

    @Field(() => HostWhereUniqueInput, {nullable:false})
    @Type(() => HostWhereUniqueInput)
    where!: HostWhereUniqueInput;
}
