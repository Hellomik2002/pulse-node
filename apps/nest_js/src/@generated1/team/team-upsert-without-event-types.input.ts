import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamUpdateWithoutEventTypesInput } from './team-update-without-event-types.input';
import { Type } from 'class-transformer';
import { TeamCreateWithoutEventTypesInput } from './team-create-without-event-types.input';

@InputType()
export class TeamUpsertWithoutEventTypesInput {

    @Field(() => TeamUpdateWithoutEventTypesInput, {nullable:false})
    @Type(() => TeamUpdateWithoutEventTypesInput)
    update!: TeamUpdateWithoutEventTypesInput;

    @Field(() => TeamCreateWithoutEventTypesInput, {nullable:false})
    @Type(() => TeamCreateWithoutEventTypesInput)
    create!: TeamCreateWithoutEventTypesInput;
}
