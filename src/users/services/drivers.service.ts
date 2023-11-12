import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from '../entities/driver.entity';
import { CreateDriverDto } from "../dto/driver.dto";

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepo: Repository<Driver>,
  ) {}

  //crear un conductor
  async create(createDriverDto: CreateDriverDto) {
    const driver = this.driverRepo.create(createDriverDto);
    await this.driverRepo.save(driver);
    return driver;
  }


    //Encontrar un conductor
    findOne(id: number){
        return this.driverRepo.findOne({
            where: {id},

        });
    }
    //mostrar todos los conductores
    findAll(){
        return   this.driverRepo.find({
            order: {id: 'ASC'},

        });
    }
    //eliminar un conductor
    async remove(id:number){
        const driver =await this.findOne(id);
        await this.driverRepo.remove(driver);
        return 'Conductor eliminado';
    }

    //actualizar un conductor con imagenes
    async update(id: number, cambios: CreateDriverDto){
        const oldDriver = await this.findOne(id);
        const updateDriver = await this.driverRepo.merge(oldDriver,cambios);
        return this.driverRepo.save(updateDriver);
    }

    }

