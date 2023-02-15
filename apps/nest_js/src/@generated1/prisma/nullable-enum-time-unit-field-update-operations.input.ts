import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TimeUnit } from './time-unit.enum';

@InputType()
export class NullableEnumTimeUnitFieldUpdateOperationsInput {

    @Field(() => TimeUnit, {nullable:true})
    set?: keyof typeof TimeUnit;
}
