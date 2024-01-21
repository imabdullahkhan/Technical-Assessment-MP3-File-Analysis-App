import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express/multer';

@ApiTags('MP3 File Analysis')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/mp3')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('file-upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'MP3 file to be uploaded',
    type: 'file',
  })
  @UseInterceptors(FileInterceptor('mp3file'))
  async uploadFile(@UploadedFile() mp3file): Promise<{ frameCount: number }> {
    try {
      const frameCount = this.appService.countMP3Frames(mp3file.buffer);
      return { frameCount };
    } catch (error) {
      console.log(error)
      throw new Error('Internal Server Error');
    }
  }
}
