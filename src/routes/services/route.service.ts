import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRouteDto } from "../dto/route.dto";
import { Route } from "../entities/route.entity";

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(Route)
    private readonly routeRepo: Repository<Route>,
  ) {}

  //crear una ruta
  async create(createRouteDto: CreateRouteDto) {
    const route = this.routeRepo.create(createRouteDto);
    await this.routeRepo.save(route);
    return route;
  }

    //Encontrar una ruta
    findOne(id: number){
        return this.routeRepo.findOne({
            where: {id},

        });
    }
    //mostrar todas las rutas
    findAll(){
        return   this.routeRepo.find({
            order: {id: 'ASC'},

        });
    }
    //eliminar una ruta
    async remove(id:number){
        const route =await this.findOne(id);
        await this.routeRepo.remove(route);
        return 'Ruta eliminada';
    }

    //actualizar una ruta
    async update(id: number, cambios: CreateRouteDto){
        const oldRoute = await this.findOne(id);
        const updateRoute = await this.routeRepo.merge(oldRoute,cambios);
        return this.routeRepo.save(updateRoute);
    }

}