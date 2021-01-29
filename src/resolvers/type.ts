import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
import _ from 'lodash';

const type: IResolvers = {
  Estudiante: {
    courses: parent => {
      const cursosLista: any[] = []
      parent.courses.map((curso: string) => {
        cursosLista.push(_.find(database.cursos, ['id', curso]))
      })
      return cursosLista
    }
  },
  Curso: {
    students: parent => {
      const estudiantesLista: any[] = []
      database.estudiantes.map( (estudiante: any) => {
        if (!!estudiante.courses.find( (course: string) => course === parent.id)) {
          estudiantesLista.push(estudiante)
        }
      });
      return estudiantesLista
    },
    path: parent => `http://www.udemy.com${parent.path}`
  }
}

export default type;