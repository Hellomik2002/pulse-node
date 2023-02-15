import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HostUpdateManyMutationInput } from './host-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HostWhereInput } from './host-where.input';

@ArgsType()
export class UpdateManyHostArgs {

    @Field(() => HostUpdateManyMutationInput, {nullable:false})
    @Type(() => HostUpdateManyMutationInput)
    data!: HostUpdateManyMutationInput;

    @Field(() => HostWhereInput, {nullable:true})
    @Type(() => HostWhereInput)
    where?: HostWhereInput;
}
