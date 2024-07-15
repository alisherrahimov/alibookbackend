import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class OtpDto {
  @IsNumber()
  @IsNotEmpty({
    message: 'Phone number is required',
  })
  @ApiProperty({ example: 998999642412, description: 'Phone number' })
  phone: number;

  @IsNumber()
  @IsNotEmpty({
    message: 'OTP is required',
  })
  @ApiProperty({ example: 4444, description: 'OTP' })
  otp: number;
}
