import { IsNotEmpty, IsNumber, IsString, Max } from 'class-validator';

export class loginDto {
  @IsNotEmpty()
  @Max(12)
  phone: string;
}

export class verifyDto {
  @IsNotEmpty()
  @Max(12)
  phone: string;
  @IsNotEmpty()
  @Max(4)
  code: number;
}

export class genderDto {
  @IsNotEmpty()
  id: string;
  @IsNumber()
  type: number; //1 bulsa male 0 famale
}

export class ageDto {
  @IsNotEmpty()
  id: string;
  @IsString()
  age: string;
}
export class interestDto {
  ids: string[];
}

export class profileDto {
  @IsNotEmpty()
  id: string;
  @IsNotEmpty()
  f_name: string;
  @IsNotEmpty()
  image: string[];
}
