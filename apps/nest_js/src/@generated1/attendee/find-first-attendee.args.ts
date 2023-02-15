import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendeeWhereInput } from './attendee-where.input';
import { Type } from 'class-transformer';
import { AttendeeOrderByWithRelationInput } from './attendee-order-by-with-relation.input';
import { AttendeeWhereUniqueInput } from './attendee-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AttendeeScalarFieldEnum } from './attendee-scalar-field.enum';

@ArgsType()
export class FindFirstAttendeeArgs {

    @Field(() => AttendeeWhereInput, {nullable:true})
    @Type(() => AttendeeWhereInput)
    where?: AttendeeWhereInput;

    @Field(() => [AttendeeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AttendeeOrderByWithRelationInput>;

    @Field(() => AttendeeWhereUniqueInput, {nullable:true})
    cursor?: AttendeeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AttendeeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AttendeeScalarFieldEnum>;
}
