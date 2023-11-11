import { Module } from "@nestjs/common";
import { Vehicle } from "./entities/vehicle.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VehicleController } from "./controllers/vehicle.controller";
import { VehiclesService } from "./services/vehicle.service";


@Module({
    imports: [TypeOrmModule.forFeature([Vehicle])],
    controllers: [VehicleController],
    providers: [VehiclesService],
  })
  export class VehiclesModule {}