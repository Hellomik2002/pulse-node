import { PrismaClient } from '@prisma/client';


export const calPrismaClient = new PrismaClient({
	datasources: {
		db: {
			url: 'postgresql://postgres:iKe4D8NTPK0D7kVqktnU@containers-us-west-198.railway.app:7017/railway',
		},
	},
});
