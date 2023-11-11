import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { StopsService } from "../services/stop.service";
import { CreateStopDto } from "../dto/stop.dto";



@Controller('stops')
export class StopController
{
    constructor(private readonly stopsService:StopsService){}
    @Post()
    async CreateStop(@Body() createStopDto: CreateStopDto){
        return this.stopsService.create(createStopDto);
    }

    @Get()
    findAll(){
        return this.stopsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.stopsService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.stopsService.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()createStopDto :CreateStopDto,
        
    )
    {
        return this.stopsService.update(id, createStopDto)
    }
}