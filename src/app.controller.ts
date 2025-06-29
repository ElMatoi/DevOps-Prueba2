import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

   @Get()
  getInicio(): string {
    return 'Hola este es una cadena de texto, saludos al dazer :v';
  }
  @Get('nueva')
  getNuevoSaludo(): string {
  return 'saludo desde para el daniel olivares desde la rama nueva';
}
}
