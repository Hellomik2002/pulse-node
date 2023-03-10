import { Body, Controller, Headers, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AWSUploadService } from './awsphoto-upload-service/awsphoto-upload-service.service';

@Controller('filemanager')
export class FilemanagerController {
  constructor(private fileUploadService: AWSUploadService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Headers() headers) {
    try {
      console.log('File is being uploaded');
      console.log(headers)
      const authorId = headers.authorid;
      const isEditor = headers.iseditor;
      const uploadedFile = await this.fileUploadService.uploadFile(file.buffer, file.originalname, authorId, headers);
      console.log('File has been uploaded,', uploadedFile.fileName);
      return {
        success: 1,
        file: {
          url: uploadedFile.fileUrl,
          title: uploadedFile.fileName,
          size: file.size,
          extensions: file.mimetype,
        }
      };
    } catch (error) {
      console.log('File upload failed', error);
      return error;
    }
  }


}
