import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HostWhereInput } from './host-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHostArgs {

    @Field(() => HostWhereInput, {nullable:true})
    @Type(() => HostWhereInput)
    where?: HostWhereInput;
}
