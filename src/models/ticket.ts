import { Student } from './student';

export interface Ticket {
  
  title?: string;
  description?: string;
  date?: Date;
 // student?: string;
  student?: Student;
  //major?: string; // Ajout de l'attribut 'major'
  major?: Major;
  archived?: boolean; // ajout d'un attribut archived
  
}




export enum Major {
  SI = 'SI',
  GE = 'GE',
  GB = 'GB',
  GM = 'GM',
  GC = 'GC',
  Medicine = 'Medicine',
  Math = 'Math',
}