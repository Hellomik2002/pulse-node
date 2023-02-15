import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { App_RoutingForms_FormResponseCreateManyFormInput } from './app-routing-forms-form-response-create-many-form.input';
import { Type } from 'class-transformer';

@InputType()
export class App_RoutingForms_FormResponseCreateManyFormInputEnvelope {

    @Field(() => [App_RoutingForms_FormResponseCreateManyFormInput], {nullable:false})
    @Type(() => App_RoutingForms_FormResponseCreateManyFormInput)
    data!: Array<App_RoutingForms_FormResponseCreateManyFormInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
