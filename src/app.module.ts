import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AiService } from './ai/ai.service';

@Module({
  imports: [AiService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
