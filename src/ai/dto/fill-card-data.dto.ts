import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FillCardDataDto {
  @IsString()
  @IsOptional()
  textInKnownLanguage?: string;

  @IsString()
  @IsOptional()
  textInLearningLanguage?: string;

  @IsString()
  @IsNotEmpty()
  languageWhatIKnowCode: string;

  @IsString()
  @IsNotEmpty()
  languageWhatILearnCode: string;
}
