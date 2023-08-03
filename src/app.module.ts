import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './models/User.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'sqlite',
      database:'database.sqlite',
      entities: [
        // __dirname+'/**/*.entity{.ts, .js}'
        UserModel
      ],
      synchronize:true
    }),
    TypeOrmModule.forFeature([UserModel])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
