import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SelectedCalendarUserIdIntegrationExternalIdCompoundUniqueInput } from './selected-calendar-user-id-integration-external-id-compound-unique.input';

@InputType()
export class SelectedCalendarWhereUniqueInput {

    @Field(() => SelectedCalendarUserIdIntegrationExternalIdCompoundUniqueInput, {nullable:true})
    userId_integration_externalId?: SelectedCalendarUserIdIntegrationExternalIdCompoundUniqueInput;
}
