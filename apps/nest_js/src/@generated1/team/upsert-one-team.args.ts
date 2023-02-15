import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { Type } from 'class-transformer';
import { TeamCreateInput } from './team-create.input';
import { TeamUpdateInput } from './team-update.input';

@ArgsType()
export class UpsertOneTeamArgs {

    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: TeamWhereUniqueInput;

    @Field(() => TeamCreateInput, {nullable:false})
    @Type(() => TeamCreateInput)
    create!: TeamCreateInput;

    @Field(() => TeamUpdateInput, {nullable:false})
    @Type(() => TeamUpdateInput)
    update!: TeamUpdateInput;
}
