import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apUrl = 'http://localhost:3000/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get(apUrl);
  }

  getStudent(id: undefined | string) {
    return this.http.get(`${apUrl}/${id}`);
    // ~ apUrl + '/' + id
    // ~ 'http://localhost:3000/students/1'
  }
  
  deleteStudent(id: number | string ){
    return this.http.delete(`${apUrl}/${id}`);
  }

  createStudent(obj: {name: string, class: string}) {
    return this.http.post(apUrl, obj);
  }

  updateStudent(id: number|string, obj: {name: string, class: string}) {
    return this.http.put(`${apUrl}/${id}`, obj);
  }
}
