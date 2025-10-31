import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { VertexModule } from './vertex/vertex.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AiModule,
    VertexModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
