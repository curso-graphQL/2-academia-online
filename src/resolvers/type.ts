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
      if (parent.students) {
        parent.students.map((estudiante: string) => {
          estudiantesLista.push(_.find(database.estudiantes, ['id', estudiante]))
        })
      }
      return estudiantesLista
    }
  }
}

export default type;