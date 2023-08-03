import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // crear
  @Post('producto')
  crearProducto(@Body() jsonRequest) {
    return this.appService.crearProducto(jsonRequest);
  }
  // leer
  @Get('producto')
  verProductos() {
    return this.appService.verProductos();
  }
  // leer
  @Get('producto/:id')
  verProducto(@Param('id') id: number) {
    return this.appService.verProducto(id);
  }
  // actualizar
  @Put('producto/:id')
  actualizarProducto(@Param('id') id: number, @Body() jsonRequest) {
    return this.appService.actualizarProducto(id, jsonRequest);
  }
  // eliminar
  @Delete('producto/:id')
  eliminarProducto(@Param('id') id: number) {
    return this.appService.eliminarProducto(id);
  }

  // Create
  @Post('usuarios')
  createEstudiante(@Body() jsonRequest) {
    return this.appService.create(jsonRequest);
  }

  // Show
  @Get('usuarios/:id')
  showEstudiante(@Param('id') id: number ) {
    return this.appService.findOne(id);
  }


  // // Edit
  // @Post('usuarios:id')
  // editEstudiante(@Param('id') id: string, @Body() request: Request) {
  //   return this.appService.edit(id, request);
  // }

}
