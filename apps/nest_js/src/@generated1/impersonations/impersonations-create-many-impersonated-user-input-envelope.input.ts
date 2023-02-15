import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImpersonationsCreateManyImpersonatedUserInput } from './impersonations-create-many-impersonated-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ImpersonationsCreateManyImpersonatedUserInputEnvelope {

    @Field(() => [ImpersonationsCreateManyImpersonatedUserInput], {nullable:false})
    @Type(() => ImpersonationsCreateManyImpersonatedUserInput)
    data!: Array<ImpersonationsCreateManyImpersonatedUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
