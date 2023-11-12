import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/users/user.module';
import { VehiclesModule } from './vehicles/vehicle.module';
import { RoutesModule } from 'src/routes/route.module';
import { StopsModule } from './stops/stop.module';
import { FilesModule } from './files/files.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Ej@091019',
      database: 'transporte',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    VehiclesModule,
    RoutesModule,
    StopsModule,
    FilesModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
