import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HostScalarWhereInput } from './host-scalar-where.input';
import { Type } from 'class-transformer';
import { HostUpdateManyMutationInput } from './host-update-many-mutation.input';

@InputType()
export class HostUpdateManyWithWhereWithoutUserInput {

    @Field(() => HostScalarWhereInput, {nullable:false})
    @Type(() => HostScalarWhereInput)
    where!: HostScalarWhereInput;

    @Field(() => HostUpdateManyMutationInput, {nullable:false})
    @Type(() => HostUpdateManyMutationInput)
    data!: HostUpdateManyMutationInput;
}
