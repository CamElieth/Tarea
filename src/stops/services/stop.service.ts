import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateStopDto } from "../dto/stop.dto";
import { Stop } from "../entities/stop.entity";


@Injectable()
export class StopsService {
  constructor(
    @InjectRepository(Stop)
    private readonly stopRepo: Repository<Stop>,
  ) {}

  //crear una parada
  async create(createStopDto: CreateStopDto) {
    const stop = this.stopRepo.create(createStopDto);
    await this.stopRepo.save(stop);
    return stop;
  }

    //Encontrar una ruta
    findOne(id: number){
        return this.stopRepo.findOne({
            where: {id},

        });
    }
    //mostrar todas las rutas
    findAll(){
        return   this.stopRepo.find({
            order: {id: 'ASC'},

        });
    }
    //eliminar una ruta
    async remove(id:number){
        const stop =await this.findOne(id);
        await this.stopRepo.remove(stop);
        return 'Parada eliminada';
    }

    //actualizar una ruta
    async update(id: number, cambios: CreateStopDto){
        const oldStop = await this.findOne(id);
        const updateStop = await this.stopRepo.merge(oldStop,cambios);
        return this.stopRepo.save(updateStop);
    }

}