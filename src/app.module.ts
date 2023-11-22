import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresDataSource } from './config/database.config';

@Module({
  imports: [TypeOrmModule.forRoot(PostgresDataSource)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
