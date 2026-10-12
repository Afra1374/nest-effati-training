import { Module } from "@nestjs/common";
import { FileUploaderController } from './file-uploader.controller.js';
import { MulterModule } from "@nestjs/platform-express";
import { FileDownloaderController } from "./file-downloader.controller.js";

@Module({
    controllers: [
        FileUploaderController,
        FileDownloaderController
    ],
    imports: [
        MulterModule.register({
            dest: './storage/upload'
        })
    ]
})
export class FileHandlerModule {}