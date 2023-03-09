import { Module } from '@nestjs/common';
import { AWSUploadService } from './awsphoto-upload-service/awsphoto-upload-service.service';
import { FilemanagerController } from './filemanager.controller';
import { FilemanagerResolver } from './filemanager.resolver';

@Module({
	providers: [ AWSUploadService, FilemanagerResolver],
	controllers: [FilemanagerController],
})
export class FilemanagerModule {}
