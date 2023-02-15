import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class EventTypeTeamIdSlugCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    teamId!: number;

    @Field(() => String, {nullable:false})
    slug!: string;
}
