import type { Config } from './config.interface';

const config: Config = {
	nest: {
		port: Number(process.env.PORT) | 3001,
	},
	cors: {
		enabled: true,
	},
	security: {
		expiresIn: process.env.SECURITY_EXPIRE || '2d',
		refreshIn: process.env.SECURITY_REFRESH || '30d',
		bcryptSaltOrRound: Number(process.env.bcryptSaltOrRound || 10),
	},
};

export default (): Config => config;
