import axios from 'axios';
import { createWriteStream } from 'fs';
import PDFDocument from 'pdfkit';

const form = new PDFDocument();

const startFetch = async () => {
  try {
    const { data } = await axios.get('http://127.0.0.1:3000/file/book', {
      responseType: 'stream',
      responseEncoding: 'binary',
    });

    data.pipe(createWriteStream('index.pdf', { encoding: 'binary' }));

    return new Promise((res, rej) => {
      data.on('end', (value) => {
        console.log('end');
        form.end();
        res();
      });
      data.on('error', (error) => {
        rej(error);
        console.log(error, 'error');
      });
    });
  } catch (error) {
    console.error(error);
  }
};

const download = async () => {
  await startFetch();
};

download();
