import { Body, Controller, Get,Delete, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Index
  @Get('usuarios')
  getEstudiante() {
    return this.appService.index();
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


  // Edit
  @Post('usuarios:id')
  editEstudiante(@Param('id') id: string, @Body() request: Request) {
    return this.appService.edit(id, request);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    await this.appService.deleteUser(id);
  }
  

}
