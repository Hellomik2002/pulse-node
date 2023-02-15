import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityUpdateManyMutationInput } from './availability-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AvailabilityWhereInput } from './availability-where.input';

@ArgsType()
export class UpdateManyAvailabilityArgs {

    @Field(() => AvailabilityUpdateManyMutationInput, {nullable:false})
    @Type(() => AvailabilityUpdateManyMutationInput)
    data!: AvailabilityUpdateManyMutationInput;

    @Field(() => AvailabilityWhereInput, {nullable:true})
    @Type(() => AvailabilityWhereInput)
    where?: AvailabilityWhereInput;
}
