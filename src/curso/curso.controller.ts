import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import {CrearCursoDto} from './dto/crear-curso';
import {CursoService} from './curso.service'
import { from } from 'rxjs';

@Controller('curso')
export class CursoController {
    constructor(private readonly cursoService: CursoService){}    
    @Get()
    getCursoTodos(): string{
        return this.cursoService.getCursoTodos();
    }

    @Get(':id')
    getCursoUno(@Param('id') idCurso: string): string{
        return this.cursoService.getCursoUno(idCurso);
    }

    @Post()
    crearCurso(@Body() cursoDto: CrearCursoDto): string{
        return this.cursoService.postCurso(cursoDto);
    }   

    @Put(':id')
    modificarCurso(@Param('id') idCurso: string, @Body() cursoDto: CrearCursoDto): string{
        return this.cursoService.putCursoUno(idCurso, cursoDto);
    }

    @Delete(':id')
        borrarCurso(@Param('id') idCurso: string): string{
            return this.cursoService.deleteCurso(idCurso);
    }

}
