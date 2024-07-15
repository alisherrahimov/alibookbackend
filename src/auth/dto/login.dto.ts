import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';
export class LoginDto {
  @IsNumber()
  @IsNotEmpty({
    message: 'Phone number is required',
  })
  @ApiProperty({ example: 998999642412, description: 'Phone number' })
  phone: number;
}
