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
    }
  }
}

export default query;