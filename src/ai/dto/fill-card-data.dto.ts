import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FillCardDataDto {
  @IsString()
  @IsOptional()
  word?: string;

  @IsString()
  @IsNotEmpty()
  languageWhatIKnowCode: string;

  @IsString()
  @IsNotEmpty()
  languageWhatILearnCode: string;
}
