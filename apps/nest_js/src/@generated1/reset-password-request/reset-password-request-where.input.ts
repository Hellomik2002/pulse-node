import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ResetPasswordRequestWhereInput {

    @Field(() => [ResetPasswordRequestWhereInput], {nullable:true})
    AND?: Array<ResetPasswordRequestWhereInput>;

    @Field(() => [ResetPasswordRequestWhereInput], {nullable:true})
    OR?: Array<ResetPasswordRequestWhereInput>;

    @Field(() => [ResetPasswordRequestWhereInput], {nullable:true})
    NOT?: Array<ResetPasswordRequestWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expires?: DateTimeFilter;
}
