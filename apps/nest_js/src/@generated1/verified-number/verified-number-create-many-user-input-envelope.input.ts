import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerifiedNumberCreateManyUserInput } from './verified-number-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class VerifiedNumberCreateManyUserInputEnvelope {

    @Field(() => [VerifiedNumberCreateManyUserInput], {nullable:false})
    @Type(() => VerifiedNumberCreateManyUserInput)
    data!: Array<VerifiedNumberCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
