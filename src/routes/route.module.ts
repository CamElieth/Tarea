import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RouteController } from "./controllers/route.controller";
import { RoutesService } from "./services/route.service";
import { Route } from "./entities/route.entity";



@Module({
    imports: [TypeOrmModule.forFeature([Route])],
    controllers: [RouteController],
    providers: [RoutesService],
  })
  export class RoutesModule {}