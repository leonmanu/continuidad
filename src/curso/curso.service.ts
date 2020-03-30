import { Injectable } from '@nestjs/common';
import { CursoI } from './interface/curso-interface';
import { from } from 'rxjs';
import { CrearCursoDto } from './dto/crear-curso';

@Injectable()
export class CursoService {
  getCursoTodos() {
    return 'Obtener todos los Cursos -> service';
  }

  getCursoUno(id: string) {
    return `Curso encotrado id: ${id} -> service`;
  }

  postCurso(curso: CrearCursoDto) {
    return `Curso creado: ${curso.clave} -> gay`;
  }

  putCursoUno(id: string, curso: CursoI) {
    return 'Modificar Curso -> la puta';
  }

  deleteCurso(id: string) {
    return 'Eliminar Curso -> service.';
  }
}
