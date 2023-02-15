import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormCreateManyUserInput } from './app-routing-forms-form-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class App_RoutingForms_FormCreateManyUserInputEnvelope {

    @Field(() => [App_RoutingForms_FormCreateManyUserInput], {nullable:false})
    @Type(() => App_RoutingForms_FormCreateManyUserInput)
    data!: Array<App_RoutingForms_FormCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
