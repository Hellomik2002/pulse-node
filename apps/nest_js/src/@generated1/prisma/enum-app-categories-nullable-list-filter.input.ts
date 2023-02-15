import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCategories } from './app-categories.enum';

@InputType()
export class EnumAppCategoriesNullableListFilter {

    @Field(() => [AppCategories], {nullable:true})
    equals?: Array<keyof typeof AppCategories>;

    @Field(() => AppCategories, {nullable:true})
    has?: keyof typeof AppCategories;

    @Field(() => [AppCategories], {nullable:true})
    hasEvery?: Array<keyof typeof AppCategories>;

    @Field(() => [AppCategories], {nullable:true})
    hasSome?: Array<keyof typeof AppCategories>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
