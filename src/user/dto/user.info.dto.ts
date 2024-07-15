import { ApiProperty } from '@nestjs/swagger';

export class UserInfoDto {
  @ApiProperty({
    example: '0',
    description: '0 is male 1 is famale 2 do not want tell you',
  })
  gender: number;

  @ApiProperty({ example: '14-18' })
  age: string;

  @ApiProperty({
    example: ['12312', '123123'],
    description: 'The genres that the user likes',
  })
  genres: string[];

  @ApiProperty({
    example: 'Alisher Rakhimov',
    description: 'The user full name',
  })
  f_name: string;
}
