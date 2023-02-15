import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCategories } from '../prisma/app-categories.enum';

@InputType()
export class AppUpdatecategoriesInput {

    @Field(() => [AppCategories], {nullable:true})
    set?: Array<keyof typeof AppCategories>;

    @Field(() => [AppCategories], {nullable:true})
    push?: Array<keyof typeof AppCategories>;
}
