import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { AdminDoctor } from './resolvers/admin.resolver';
import { DoctorResolver } from './resolvers/doctor.resolver';
import { GetEventTypeResolver } from './resolvers/get_event_type.resolver';

@Module({
	imports: [AuthModule],
	providers: [AdminDoctor, DoctorResolver, GetEventTypeResolver],
})
export class DoctorModule {}
