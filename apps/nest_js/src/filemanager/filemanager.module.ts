import { Module } from '@nestjs/common';
import { AWSPhotoUploadService } from './awsphoto-upload-service/awsphoto-upload-service.service';

@Module({
	providers: [ AWSPhotoUploadService],
})
export class FilemanagerModule {}
