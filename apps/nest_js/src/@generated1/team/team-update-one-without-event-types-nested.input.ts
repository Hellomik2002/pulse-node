import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateWithoutEventTypesInput } from './team-create-without-event-types.input';
import { Type } from 'class-transformer';
import { TeamCreateOrConnectWithoutEventTypesInput } from './team-create-or-connect-without-event-types.input';
import { TeamUpsertWithoutEventTypesInput } from './team-upsert-without-event-types.input';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { TeamUpdateWithoutEventTypesInput } from './team-update-without-event-types.input';

@InputType()
export class TeamUpdateOneWithoutEventTypesNestedInput {

    @Field(() => TeamCreateWithoutEventTypesInput, {nullable:true})
    @Type(() => TeamCreateWithoutEventTypesInput)
    create?: TeamCreateWithoutEventTypesInput;

    @Field(() => TeamCreateOrConnectWithoutEventTypesInput, {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutEventTypesInput)
    connectOrCreate?: TeamCreateOrConnectWithoutEventTypesInput;

    @Field(() => TeamUpsertWithoutEventTypesInput, {nullable:true})
    @Type(() => TeamUpsertWithoutEventTypesInput)
    upsert?: TeamUpsertWithoutEventTypesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => TeamWhereUniqueInput, {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: TeamWhereUniqueInput;

    @Field(() => TeamUpdateWithoutEventTypesInput, {nullable:true})
    @Type(() => TeamUpdateWithoutEventTypesInput)
    update?: TeamUpdateWithoutEventTypesInput;
}
