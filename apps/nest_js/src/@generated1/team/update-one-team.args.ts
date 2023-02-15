import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamUpdateInput } from './team-update.input';
import { Type } from 'class-transformer';
import { TeamWhereUniqueInput } from './team-where-unique.input';

@ArgsType()
export class UpdateOneTeamArgs {

    @Field(() => TeamUpdateInput, {nullable:false})
    @Type(() => TeamUpdateInput)
    data!: TeamUpdateInput;

    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: TeamWhereUniqueInput;
}
