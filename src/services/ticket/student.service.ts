import { Injectable } from '@angular/core';
import { Student } from '../../models/student';
import { STUDENTS_MOCKED } from '../../mocks/students.mock';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //private studentList: Student[] = STUDENTS_MOCKED;
  private studentList: Student[] = [];
  private apiUrl = 'http://localhost:9428/api/students'; //Définit l'URL vers l'api contenant les données des étudiants.

  students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);//Crée un BehaviorSubject initialisé avec la liste d'étudiants vide
  constructor(private http: HttpClient) {}
  /*
  getStudents(): Student[] {
    return this.studentList;
  }*/


// récupérer les données des étudiants à partir du fichier JSON spécifié par apiUr  
getStudents(): Observable<Student[]> {
    this.http.get<Student[]>(this.apiUrl).subscribe(
      (students: Student[]) => {
        this.students$.next(students);
      },
      (error) => {
        console.error('Erreur lors de la récupération des étudiants :', error);
      }
    );
    return this.students$.asObservable();
  }  
 
  // méthode pour ajouter un nouvel utilisateur à la liste
  
  addStudent(newStudent: Student): void {
    // console.log(newStudent);
    this.http.post<Student>(this.apiUrl, newStudent).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }

    );
    alert('étudiant créé ');
    
  }

  deleteStudent(id : number){
   

      const url = `${this.apiUrl}/${id}`;

     
      
      
      this.http.delete(url).subscribe(() => {
        
        // Filtrer la liste pour exclure l'étudiant supprimé
        this.studentList = this.studentList.filter(student => student.id !== id);
        
        // Mettre à jour l'observable avec la nouvelle liste
        this.students$.next(this.studentList);
        alert('Student supprimé');
      });
  
}
}