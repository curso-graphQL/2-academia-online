import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';

const query: IResolvers = {
  Query: {
    estudiantes(): any {
      return database.estudiantes;
    },
    estudiante(__: void, { id }): any {
      const found = database.estudiantes.find( estudiante => estudiante.id === id );
      return found || {
        id: -1, 
        name: `No se ha encontrado el estudiante con ID ${id}`,
        email: '',
        courses: []
      }
    },
    cursos(): any {
      return database.cursos;
    },
    curso(__: void, { id }): any {
      const found = database.cursos.find( curso => curso.id === id );
      return found || {
        id: -1,
        title: `No se ha encontrado el curso con ID ${id}`,
        clases: -1,
        logo: '',
        path: '',
        teacher: '',
        reviews: []
      }
    },
  }
}

export default query;