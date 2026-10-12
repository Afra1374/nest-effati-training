import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import 'multer'
@Controller('file-handler')
export class FileUploaderController {
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    upload(@UploadedFile() file: Express.Multer.File){
        console.log('file ===> ', file);
        return {
            fileName : file?.originalname
        }
    }
}