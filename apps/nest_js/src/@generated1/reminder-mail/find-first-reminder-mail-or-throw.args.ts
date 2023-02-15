import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReminderMailWhereInput } from './reminder-mail-where.input';
import { Type } from 'class-transformer';
import { ReminderMailOrderByWithRelationInput } from './reminder-mail-order-by-with-relation.input';
import { ReminderMailWhereUniqueInput } from './reminder-mail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReminderMailScalarFieldEnum } from './reminder-mail-scalar-field.enum';

@ArgsType()
export class FindFirstReminderMailOrThrowArgs {

    @Field(() => ReminderMailWhereInput, {nullable:true})
    @Type(() => ReminderMailWhereInput)
    where?: ReminderMailWhereInput;

    @Field(() => [ReminderMailOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReminderMailOrderByWithRelationInput>;

    @Field(() => ReminderMailWhereUniqueInput, {nullable:true})
    cursor?: ReminderMailWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReminderMailScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReminderMailScalarFieldEnum>;
}
