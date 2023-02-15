import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { App_RoutingForms_FormCreateManyInput } from '../app-routing-forms-form/app-routing-forms-form-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAppRoutingFormsFormArgs {

    @Field(() => [App_RoutingForms_FormCreateManyInput], {nullable:false})
    @Type(() => App_RoutingForms_FormCreateManyInput)
    data!: Array<App_RoutingForms_FormCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
