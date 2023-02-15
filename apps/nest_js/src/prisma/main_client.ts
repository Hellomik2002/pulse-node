// import { PrismaClient } from './generated/client';

import { PrismaClient } from '@calcom/prisma_pulse';

export const mainPrismaClient = new PrismaClient({
	datasources: {
		db: {
			url: 'mongodb+srv://admin:gpPHn4BEjdHyG91w@cluster0.bo29m4x.mongodb.net/pulse_new',
		},
	},
});
