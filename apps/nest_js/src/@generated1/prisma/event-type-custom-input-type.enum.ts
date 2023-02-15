import { registerEnumType } from '@nestjs/graphql';

export enum EventTypeCustomInputType {
    TEXT = "TEXT",
    TEXTLONG = "TEXTLONG",
    NUMBER = "NUMBER",
    BOOL = "BOOL",
    RADIO = "RADIO",
    PHONE = "PHONE"
}


registerEnumType(EventTypeCustomInputType, { name: 'EventTypeCustomInputType', description: undefined })
