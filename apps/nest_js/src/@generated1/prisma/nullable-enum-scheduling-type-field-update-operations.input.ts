import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchedulingType } from './scheduling-type.enum';

@InputType()
export class NullableEnumSchedulingTypeFieldUpdateOperationsInput {

    @Field(() => SchedulingType, {nullable:true})
    set?: keyof typeof SchedulingType;
}
