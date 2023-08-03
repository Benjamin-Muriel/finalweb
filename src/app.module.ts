import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './models/User.entity';
import { ProductoModel } from './models/Producto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'sqlite',
      database:'database.sqlite',
      entities: [
        // __dirname+'/**/*.entity{.ts, .js}'
        UserModel,
        ProductoModel
      ],
      synchronize:true
    }),
    TypeOrmModule.forFeature([UserModel,ProductoModel])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
