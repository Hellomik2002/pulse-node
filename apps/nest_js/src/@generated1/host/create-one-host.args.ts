import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HostCreateInput } from './host-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHostArgs {

    @Field(() => HostCreateInput, {nullable:false})
    @Type(() => HostCreateInput)
    data!: HostCreateInput;
}
