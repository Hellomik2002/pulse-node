import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseCreateManyInput } from '../app-routing-forms-form-response/app-routing-forms-form-response-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAppRoutingFormsFormResponseArgs {

    @Field(() => [App_RoutingForms_FormResponseCreateManyInput], {nullable:false})
    @Type(() => App_RoutingForms_FormResponseCreateManyInput)
    data!: Array<App_RoutingForms_FormResponseCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
