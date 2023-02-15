import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HostWhereUniqueInput } from './host-where-unique.input';
import { Type } from 'class-transformer';
import { HostUpdateWithoutUserInput } from './host-update-without-user.input';

@InputType()
export class HostUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => HostWhereUniqueInput, {nullable:false})
    @Type(() => HostWhereUniqueInput)
    where!: HostWhereUniqueInput;

    @Field(() => HostUpdateWithoutUserInput, {nullable:false})
    @Type(() => HostUpdateWithoutUserInput)
    data!: HostUpdateWithoutUserInput;
}
