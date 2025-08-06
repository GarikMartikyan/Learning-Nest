import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
import * as path from 'node:path';
import * as fs from 'node:fs';

@Injectable()
export class FilesService {
  async createFile(file: any) {
    try {
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static');
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }

      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      return fileName;
    } catch (e) {
      throw new HttpException(
        'Error during file upload',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
