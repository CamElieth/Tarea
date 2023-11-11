import { Injectable } from "@nestjs/common";
import { CreateVehicleDto } from "../dto/vehicle.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Vehicle } from "../entities/vehicle.entity";
import { Repository } from "typeorm";

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepo: Repository<Vehicle>,
  ) {}

  //crear un vehiculo
  async create(createVehicleDto: CreateVehicleDto) {
    const vehicle = this.vehicleRepo.create(createVehicleDto);
    await this.vehicleRepo.save(vehicle);
    return vehicle;
  }

    //Encontrar un vehiculo
    findOne(id: number){
        return this.vehicleRepo.findOne({
            where: {id},

        });
    }
    //mostrar todos los vehiculos
    findAll(){
        return   this.vehicleRepo.find({
            order: {id: 'ASC'},

        });
    }
    //eliminar un vehiculo
    async remove(id:number){
        const vehicle =await this.findOne(id);
        await this.vehicleRepo.remove(vehicle);
        return 'Vehiculo eliminado';
    }

    //actualizar un vehiculo 
    async update(id: number, cambios: CreateVehicleDto){
        const oldVehicle = await this.findOne(id);
        const updateVehicle = await this.vehicleRepo.merge(oldVehicle,cambios);
        return this.vehicleRepo.save(updateVehicle);
    }

}