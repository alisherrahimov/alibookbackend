import { ApiProperty } from '@nestjs/swagger';

export class BookDto {
  @ApiProperty({ type: 'string', example: '14-18' })
  age?: string;
  @ApiProperty({ type: 'string', example: 'John Doe' })
  author?: string;
  @ApiProperty({ type: 'string', example: 'This is a book' })
  description?: string;
  @ApiProperty({ type: 'string', example: '1234567890' })
  isbn?: string;
  @ApiProperty({
    type: 'number',
    example: '1',
    description: 'uzbek=1 english=2 russion=3',
  })
  language?: string;
  @ApiProperty({ type: 'number', example: '100' })
  pages?: number;
  @ApiProperty({
    type: 'number',
    example: '100',
    description: 'price of the book',
  })
  price?: number;
  @ApiProperty({
    type: 'number',
    example: '100',
    description: 'number of books purchased',
  })
  purchased?: number;
  @ApiProperty({
    type: 'string',
    example: '2021-12-12',
    description: 'release date of the book',
  })
  release_date?: Date;
  @ApiProperty({
    type: 'string',
    example: 'book title',
    description: 'title of the book',
  })
  title?: string;
  @ApiProperty({ type: 'string', example: 'pdf_id=112312312' })
  pdf_id?: string;
  @ApiProperty({ type: 'string', example: 'image_id=12312323' })
  image_id?: string;
}
