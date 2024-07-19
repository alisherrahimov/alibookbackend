import { ApiProperty } from '@nestjs/swagger';

export class ReviewDto {
  @ApiProperty({ type: 'string', example: '1' })
  book_id: string;
  @ApiProperty({ type: 'string', example: '1' })
  user_id: string;
  @ApiProperty({ type: 'string', example: 'This is a review' })
  comment: string;
  @ApiProperty({ type: 'number', example: '5' })
  rating: number;
}
