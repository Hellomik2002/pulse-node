import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PeriodType } from './period-type.enum';

@InputType()
export class EnumPeriodTypeFieldUpdateOperationsInput {

    @Field(() => PeriodType, {nullable:true})
    set?: keyof typeof PeriodType;
}
