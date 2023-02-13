import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { AdminDoctor } from './resolvers/admin.resolver';
import { DoctorResolver } from './resolvers/doctor.resolver';

@Module({
	imports: [AuthModule],
	providers: [AdminDoctor, DoctorResolver],
})
export class DoctorModule {}
