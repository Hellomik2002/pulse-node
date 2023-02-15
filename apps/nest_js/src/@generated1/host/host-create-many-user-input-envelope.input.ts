import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HostCreateManyUserInput } from './host-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class HostCreateManyUserInputEnvelope {

    @Field(() => [HostCreateManyUserInput], {nullable:false})
    @Type(() => HostCreateManyUserInput)
    data!: Array<HostCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
