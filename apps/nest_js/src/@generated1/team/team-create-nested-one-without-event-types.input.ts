import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateWithoutEventTypesInput } from './team-create-without-event-types.input';
import { Type } from 'class-transformer';
import { TeamCreateOrConnectWithoutEventTypesInput } from './team-create-or-connect-without-event-types.input';
import { TeamWhereUniqueInput } from './team-where-unique.input';

@InputType()
export class TeamCreateNestedOneWithoutEventTypesInput {

    @Field(() => TeamCreateWithoutEventTypesInput, {nullable:true})
    @Type(() => TeamCreateWithoutEventTypesInput)
    create?: TeamCreateWithoutEventTypesInput;

    @Field(() => TeamCreateOrConnectWithoutEventTypesInput, {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutEventTypesInput)
    connectOrCreate?: TeamCreateOrConnectWithoutEventTypesInput;

    @Field(() => TeamWhereUniqueInput, {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: TeamWhereUniqueInput;
}
