import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPermissionRole } from '../user/user-permission-role.enum';

@InputType()
export class NestedEnumUserPermissionRoleFilter {

    @Field(() => UserPermissionRole, {nullable:true})
    equals?: keyof typeof UserPermissionRole;

    @Field(() => [UserPermissionRole], {nullable:true})
    in?: Array<keyof typeof UserPermissionRole>;

    @Field(() => [UserPermissionRole], {nullable:true})
    notIn?: Array<keyof typeof UserPermissionRole>;

    @Field(() => NestedEnumUserPermissionRoleFilter, {nullable:true})
    not?: NestedEnumUserPermissionRoleFilter;
}
