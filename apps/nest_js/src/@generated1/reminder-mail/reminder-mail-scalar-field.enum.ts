import { registerEnumType } from '@nestjs/graphql';

export enum ReminderMailScalarFieldEnum {
    id = "id",
    referenceId = "referenceId",
    reminderType = "reminderType",
    elapsedMinutes = "elapsedMinutes",
    createdAt = "createdAt"
}


registerEnumType(ReminderMailScalarFieldEnum, { name: 'ReminderMailScalarFieldEnum', description: undefined })
