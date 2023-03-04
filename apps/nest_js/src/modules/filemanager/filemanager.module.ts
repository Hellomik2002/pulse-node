import { Module } from '@nestjs/common';
import { AWSUploadService } from './awsphoto-upload-service/awsphoto-upload-service.service';
import { FilemanagerController } from './filemanager.controller';

@Module({
	providers: [ AWSUploadService],
	controllers: [FilemanagerController],
})
export class FilemanagerModule {}
