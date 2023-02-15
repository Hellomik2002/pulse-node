import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class SelectedCalendarUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    integration!: string;

    @Field(() => String, {nullable:false})
    externalId!: string;
}
