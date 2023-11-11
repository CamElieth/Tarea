import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateVehicleDto } from "../dto/vehicle.dto";
import { VehiclesService } from "../services/vehicle.service";


@Controller('vehicles')
export class VehicleController
{
    constructor(private readonly vehiclesService:VehiclesService){}
    @Post()
    async CreateVehicle(@Body() createVehicleDto: CreateVehicleDto){
        return this.vehiclesService.create(createVehicleDto);
    }

    @Get()
    findAll(){
        return this.vehiclesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.vehiclesService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.vehiclesService.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()createVehicleDto :CreateVehicleDto,
        
    )
    {
        return this.vehiclesService.update(id, createVehicleDto)
    }
}