import { registerEnumType } from '@nestjs/graphql';

export enum FeedbackScalarFieldEnum {
    id = "id",
    date = "date",
    userId = "userId",
    rating = "rating",
    comment = "comment"
}


registerEnumType(FeedbackScalarFieldEnum, { name: 'FeedbackScalarFieldEnum', description: undefined })
