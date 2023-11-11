
import { BadRequestException, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { fileFilter } from "src/helpers/fileFilter.helper";
import { fileNamer } from "src/helpers/fileNamer.helper";
import { Response } from "express";
import { FilesService } from '../services/file.service';
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
      storage: diskStorage({
        destination: './static/images/',
        filename: fileNamer,
      }),
    }),
  )
  UploadImage(@UploadedFile() file: Express.Multer.File) {
    if (!file){
      throw new BadRequestException('Asegurese que el archivo es una imagen')
    }

    const url = `${file.filename}`;

    return { url };
  }

  @Get('images/:imageName')
  findBook(@Res() res: Response, @Param('imageName') imageName: string) {
    const path = this.filesService.getStaticImageName(imageName);
    res.sendFile(path);
  }
}