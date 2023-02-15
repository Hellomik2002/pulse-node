import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendeeWhereInput } from './attendee-where.input';

@InputType()
export class AttendeeListRelationFilter {

    @Field(() => AttendeeWhereInput, {nullable:true})
    every?: AttendeeWhereInput;

    @Field(() => AttendeeWhereInput, {nullable:true})
    some?: AttendeeWhereInput;

    @Field(() => AttendeeWhereInput, {nullable:true})
    none?: AttendeeWhereInput;
}
