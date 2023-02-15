import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HostWhereUniqueInput } from './host-where-unique.input';
import { Type } from 'class-transformer';
import { HostCreateInput } from './host-create.input';
import { HostUpdateInput } from './host-update.input';

@ArgsType()
export class UpsertOneHostArgs {

    @Field(() => HostWhereUniqueInput, {nullable:false})
    @Type(() => HostWhereUniqueInput)
    where!: HostWhereUniqueInput;

    @Field(() => HostCreateInput, {nullable:false})
    @Type(() => HostCreateInput)
    create!: HostCreateInput;

    @Field(() => HostUpdateInput, {nullable:false})
    @Type(() => HostUpdateInput)
    update!: HostUpdateInput;
}
