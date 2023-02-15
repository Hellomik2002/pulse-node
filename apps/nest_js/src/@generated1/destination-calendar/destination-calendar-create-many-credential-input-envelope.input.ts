import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DestinationCalendarCreateManyCredentialInput } from './destination-calendar-create-many-credential.input';
import { Type } from 'class-transformer';

@InputType()
export class DestinationCalendarCreateManyCredentialInputEnvelope {

    @Field(() => [DestinationCalendarCreateManyCredentialInput], {nullable:false})
    @Type(() => DestinationCalendarCreateManyCredentialInput)
    data!: Array<DestinationCalendarCreateManyCredentialInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
