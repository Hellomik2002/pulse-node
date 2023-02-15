import { Resolver, Query, Args } from '@nestjs/graphql';
import { EventType } from 'src/@generated1/event-type/event-type.model';
import { Schedule } from 'src/@generated1/schedule/schedule.model';
// import { BaseEventType } from 'src/@generated2';
// import { EventType } from 'src/@generated1/event-type/event-type.model';
import { calPrismaClient } from 'src/prisma/client_cal';

@Resolver()
export class GetEventTypeResolver {
	@Query(() => [EventType])
	async getEventTypeFull(
		@Args('calUserId') calUserId: number,
	): Promise<EventType[]> {
		const eventTypes = await calPrismaClient.eventType.findMany({
			where: {
				userId: calUserId,
			},
			include: {
				bookings: {
					where: {
						userId: calUserId,
                        endTime: {
                            gt: new Date()
                        }
					},
				},
				schedule: true,
			},
		});

		return eventTypes;
	}
	@Query(() => [Schedule])
	async getSchedule(
		@Args('calUserId') calUserId: number,
	): Promise<Schedule[]> {
		return await calPrismaClient.schedule.findMany({
			where: {
				userId: calUserId,
			},
			include: {
				availability: true,
			},
		});
	}
}
