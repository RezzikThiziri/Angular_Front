import { Ticket,Major } from '../models/ticket';
import { STUDENTS_MOCKED } from './students.mock';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Madrid',
    description: '',
    date: dateToday,
   // student: 'Paul',
   student: STUDENTS_MOCKED[2],
    major: Major.SI,
    archived: false // Ajout de l'attribut 'archived'
    
  },
  {
    title: 'Visite de la Tour Eiffel',
    description: 'Description du voyage',
    date: dateToday,
    //student: 'Anakin',
    student: STUDENTS_MOCKED[1],
    major:Major.GC,
    archived: false // Ajout de l'attribut 'archived' pour un ticket archivé
  
  },
  {
    title: 'Test archive',
    description: 'Test archive',
    date: dateToday,
    //student: 'Anakin',
    student: STUDENTS_MOCKED[0],
    major:Major.GC,
    archived: true //mettre le ticket archivé
  
  },
];
