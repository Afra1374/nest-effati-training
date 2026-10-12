import {
  Controller,
  Get,
  Param,
  Res,
  StreamableFile,
  NotFoundException
} from '@nestjs/common';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';
import type { Response } from 'express'; // فقط برای تایپ‌ها استفاده می‌شود

@Controller('file-handler')
export class FileDownloaderController {

  @Get('download/:filename')
  downloadFile(
    @Param('filename') filename: string,
    @Res({ passthrough: true }) res: Response // گرفتن آبجکت ریسپانس
  ): StreamableFile {
    
    // ۱. پیدا کردن مسیر دقیق فایل در سرور
    // process.cwd() مسیر روت پروژه را برمی‌گرداند
    const filePath = join(process.cwd(), 'uploads', filename);

    // ۲. بررسی وجود فایل
    if (!existsSync(filePath)) {
      throw new NotFoundException('فایل مورد نظر پیدا نشد!');
    }

    // ۳. خواندن فایل به صورت Stream
    const fileStream = createReadStream(filePath);

    // ۴. تنظیم هدرها برای مرورگر (اختیاری ولی به شدت پیشنهاد می‌شود)
    res.set({
      'Content-Type': 'application/octet-stream', // به مرورگر می‌گوید این یک فایل باینری است
      'Content-Disposition': `attachment; filename="${filename}"`, // مرورگر را مجبور به دانلود (Save As) می‌کند
    });

    // ۵. ارسال فایل
    return new StreamableFile(fileStream);
  }
}
