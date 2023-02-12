// import { PrismaClient } from './generated/client';

import { PrismaClient } from '@calcom/prisma_pulse';

export const mainPrismaClient = new PrismaClient({
	datasources: {
		db: {
			url: 'postgresql://postgres:z8zb8jKadEACdzARhmsP@containers-us-west-165.railway.app:6983/railway',
		},
	},
});
