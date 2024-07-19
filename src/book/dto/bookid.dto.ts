import { ApiProperty } from '@nestjs/swagger';

export class BookIdDto {
  @ApiProperty({
    description: 'The ID of the book',
    example: '123123123123',
    required: true,
  })
  book_id: string;
}
