import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateRouteDto } from "../dto/route.dto";
import { RoutesService } from "../services/route.service";


@Controller('routes')
export class RouteController
{
    constructor(private readonly routesService:RoutesService){}
    @Post()
    async CreateRoute(@Body() createRouteDto: CreateRouteDto){
        return this.routesService.create(createRouteDto);
    }
    
    @Get()
    findAll(){
        return this.routesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.routesService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.routesService.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()createRouteDto :CreateRouteDto,
        
    )
    {
        return this.routesService.update(id, createRouteDto)
    }
}