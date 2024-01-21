import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  countMP3Frames(mp3Buffer: Buffer): number {
    const syncPatternIndex = mp3Buffer.indexOf(Buffer.from([0xFF, 0xE]));

    if (syncPatternIndex === -1) {
      throw new Error('Invalid MP3 file: missing sync pattern');
    }
    const frames = Math.ceil(syncPatternIndex / 4);

    return frames;

  }
}
