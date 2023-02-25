import { PulseUser } from '@calcom/prisma_pulse';
import { ObjectType } from '@nestjs/graphql';
import { Token } from './token.model';

@ObjectType()
export class Auth extends Token {
	user: PulseUser;
}
