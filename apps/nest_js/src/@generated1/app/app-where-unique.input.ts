import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AppWhereUniqueInput {

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    dirName?: string;
}
