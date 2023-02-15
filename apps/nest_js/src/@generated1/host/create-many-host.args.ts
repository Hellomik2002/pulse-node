import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HostCreateManyInput } from './host-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHostArgs {

    @Field(() => [HostCreateManyInput], {nullable:false})
    @Type(() => HostCreateManyInput)
    data!: Array<HostCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
