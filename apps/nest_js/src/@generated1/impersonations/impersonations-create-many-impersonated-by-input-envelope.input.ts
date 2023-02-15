import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImpersonationsCreateManyImpersonatedByInput } from './impersonations-create-many-impersonated-by.input';
import { Type } from 'class-transformer';

@InputType()
export class ImpersonationsCreateManyImpersonatedByInputEnvelope {

    @Field(() => [ImpersonationsCreateManyImpersonatedByInput], {nullable:false})
    @Type(() => ImpersonationsCreateManyImpersonatedByInput)
    data!: Array<ImpersonationsCreateManyImpersonatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
