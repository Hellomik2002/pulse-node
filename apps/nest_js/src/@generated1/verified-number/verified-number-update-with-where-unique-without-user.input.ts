import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerifiedNumberWhereUniqueInput } from './verified-number-where-unique.input';
import { Type } from 'class-transformer';
import { VerifiedNumberUpdateWithoutUserInput } from './verified-number-update-without-user.input';

@InputType()
export class VerifiedNumberUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => VerifiedNumberWhereUniqueInput, {nullable:false})
    @Type(() => VerifiedNumberWhereUniqueInput)
    where!: VerifiedNumberWhereUniqueInput;

    @Field(() => VerifiedNumberUpdateWithoutUserInput, {nullable:false})
    @Type(() => VerifiedNumberUpdateWithoutUserInput)
    data!: VerifiedNumberUpdateWithoutUserInput;
}
