import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPermissionRole } from '../user/user-permission-role.enum';

@InputType()
export class EnumUserPermissionRoleFieldUpdateOperationsInput {

    @Field(() => UserPermissionRole, {nullable:true})
    set?: keyof typeof UserPermissionRole;
}
