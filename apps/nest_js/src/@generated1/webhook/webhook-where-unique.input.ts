import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WebhookCourseIdentifierCompoundUniqueInput } from './webhook-course-identifier-compound-unique.input';

@InputType()
export class WebhookWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => WebhookCourseIdentifierCompoundUniqueInput, {nullable:true})
    courseIdentifier?: WebhookCourseIdentifierCompoundUniqueInput;
}
