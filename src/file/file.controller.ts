import { Controller, Get, Header, StreamableFile } from '@nestjs/common';
import fs, { readFileSync } from 'fs';
import { join } from 'path';
import { PDFDocument } from 'pdf-lib';

@Controller('file')
export class FileController {
  @Get('/book')
  @Header('Content-type', 'application/pdf')
  getFile(): StreamableFile {
    const file = fs.createReadStream(join(process.cwd(), '1.pdf'));
    return new StreamableFile(file, {
      type: 'application/pdf',
      length: 100000,
    });
  }
  @Get('/b')
  async getBook() {
    // const file = createReadStream(join(process.cwd(), '1.pdf'));
    const file = join(process.cwd(), '1.pdf');
    const files = readFileSync(file, { encoding: 'base64' });
    const pdfDoc = await PDFDocument.load(files);

    // Create a new "sub" document
    const subDocument = await PDFDocument.create();
    // copy the page at current index
    const [copiedPage] = await subDocument.copyPages(pdfDoc, [2]);
    subDocument.addPage(copiedPage);
    const pdfBytes = await subDocument.save();

    return pdfBytes.toString();
  }
}
