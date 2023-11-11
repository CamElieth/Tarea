import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateDriverDto } from "src/dto/driver.dto";
import { DriversService } from "src/services/drivers.service";


@Controller('driver')
export class DriverController
{
    constructor(private readonly driversService:DriversService){}
    @Post()
    async CreateDriver(@Body() createDriverDto: CreateDriverDto){
        return this.driversService.create(createDriverDto);
    }

    @Get()
    findAll(){
        return this.driversService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.driversService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.driversService.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()createDriverDto :CreateDriverDto,
        
    )
    {
        return this.driversService.update(id, createDriverDto)
    }
}