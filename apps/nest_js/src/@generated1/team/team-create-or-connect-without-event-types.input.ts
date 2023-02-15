import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { Type } from 'class-transformer';
import { TeamCreateWithoutEventTypesInput } from './team-create-without-event-types.input';

@InputType()
export class TeamCreateOrConnectWithoutEventTypesInput {

    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: TeamWhereUniqueInput;

    @Field(() => TeamCreateWithoutEventTypesInput, {nullable:false})
    @Type(() => TeamCreateWithoutEventTypesInput)
    create!: TeamCreateWithoutEventTypesInput;
}
