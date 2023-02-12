import { PrismaClient } from '@prisma/client';

export const calPrismaClient = new PrismaClient({
	datasources: {
		db: {
			url: 'postgresql://postgres:JUyitJJdwVbBysg2fX8u@containers-us-west-198.railway.app:7017/railway',
		},
	},
});
