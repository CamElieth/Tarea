import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StopsService } from "./services/stop.service";
import { StopController } from "./controllers/stop.controller";
import { Stop } from "./entities/stop.entity";




@Module({
    imports: [TypeOrmModule.forFeature([Stop])],
    controllers: [StopController],
    providers: [StopsService],
  })
  export class StopsModule {}