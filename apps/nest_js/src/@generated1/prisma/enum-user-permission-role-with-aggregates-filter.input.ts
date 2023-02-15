import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPermissionRole } from '../user/user-permission-role.enum';
import { NestedEnumUserPermissionRoleWithAggregatesFilter } from './nested-enum-user-permission-role-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumUserPermissionRoleFilter } from './nested-enum-user-permission-role-filter.input';

@InputType()
export class EnumUserPermissionRoleWithAggregatesFilter {

    @Field(() => UserPermissionRole, {nullable:true})
    equals?: keyof typeof UserPermissionRole;

    @Field(() => [UserPermissionRole], {nullable:true})
    in?: Array<keyof typeof UserPermissionRole>;

    @Field(() => [UserPermissionRole], {nullable:true})
    notIn?: Array<keyof typeof UserPermissionRole>;

    @Field(() => NestedEnumUserPermissionRoleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUserPermissionRoleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumUserPermissionRoleFilter, {nullable:true})
    _min?: NestedEnumUserPermissionRoleFilter;

    @Field(() => NestedEnumUserPermissionRoleFilter, {nullable:true})
    _max?: NestedEnumUserPermissionRoleFilter;
}
