import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HostWhereInput } from './host-where.input';

@InputType()
export class HostListRelationFilter {

    @Field(() => HostWhereInput, {nullable:true})
    every?: HostWhereInput;

    @Field(() => HostWhereInput, {nullable:true})
    some?: HostWhereInput;

    @Field(() => HostWhereInput, {nullable:true})
    none?: HostWhereInput;
}
