import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCategories } from '../prisma/app-categories.enum';

@InputType()
export class AppCreatecategoriesInput {

    @Field(() => [AppCategories], {nullable:false})
    set!: Array<keyof typeof AppCategories>;
}
