import { IResolvers } from 'graphql-tools';
import _ from 'lodash';
import { database } from '../data/data.store';

const mutation: IResolvers = {
  Mutation: {
    cursoNuevo(__: void, { curso }): any {
      if (database.cursos.find( item => curso.title === item.title)) {
        return {
          id: -1,
          title: 'El curso ya existe con este título',
          clases: 0, 
          logo: '', 
          path: '',
          teacher: '',
          reviews: [],
        }
      }
      const nuevoCurso = {
        id: String(database.cursos.length + 1),
        title: curso.title,
        description: curso.description,
        clases: curso.clases, 
        time: curso.time, 
        level: curso.level,
        logo: curso.logo, 
        path: curso.path,
        teacher: curso.teacher, 
        reviews: [],
        students: []
      };
      database.cursos.push(nuevoCurso);
      return nuevoCurso;
    },
    modificarCurso(__: void, { curso }): any {
      const foundIndex = _.findIndex(database.cursos, item => curso.id === item.id)
      if (foundIndex > 0) {
        database.cursos[foundIndex] = { ...database.cursos[0], ...curso };
        return database.cursos[foundIndex];
      }

      return {
        id: -1,
        title: 'No existe curso con este id',
        clases: 0, 
        logo: '', 
        path: '',
        teacher: '',
        reviews: [],
      }
    },
    eliminarCurso(__: void, { id }): any {
      const found = _.remove(database.cursos, item => id === item.id)
      return found[0] || {
        id: -1,
        title: 'No existe curso con este id',
        clases: 0, 
        logo: '', 
        path: '',
        teacher: '',
        reviews: [],
      }
    }
  }
}

export default mutation;