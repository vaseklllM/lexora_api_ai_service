import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { VertexModule } from './vertex/vertex.module';
import { AiModule } from './ai/ai.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      secret: Buffer.from(process.env.JWT_SECRET as string, 'utf-8'),
      signOptions: { expiresIn: '1h' },
    }),
    AiModule,
    VertexModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
