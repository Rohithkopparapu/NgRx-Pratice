import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BlogModel, StudentsModel, issueModel } from './blogs/blog.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token!: string | null;

  constructor(private http:HttpClient) { }

  getAllBlogs():Observable<BlogModel[]>{
  return this.http.get<BlogModel[]>('http://localhost:3000/Blogs')
  }

  getStudentsList(){
   this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWx1ZSI6eyJpZCI6IjY1ZDJlZTkwOWVhYmVjYjE5MzgxN2IyZCIsIm5hbWUiOiJWaWpheSIsImVtYWlsIjoidmlqYXlAZ21haWwuY29tIiwicm9sZSI6IkxpYnJhcmlhbiJ9LCJpYXQiOjE3MDk3MDE5MTUsImV4cCI6MTcwOTcwNjcxNX0.iRRkuOnnMZKsWb77vAL64MA3uMZ-iStK6RtqUSfXiCU"
 const headers = new HttpHeaders({
     'Authorization':`Bearer ${this.token}`,
     
    });
   return this.http.get<StudentsModel[]>(`http://localhost:8080/catController/studentusers`,{headers:headers}).pipe(map((res)=>{
      return res;
    }))

}
issuebooks(id:string,books: { categoryname: string; bookname: string; }[]):Observable<issueModel[]>{
    this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWx1ZSI6eyJpZCI6IjY1ZDJlZTkwOWVhYmVjYjE5MzgxN2IyZCIsIm5hbWUiOiJWaWpheSIsImVtYWlsIjoidmlqYXlAZ21haWwuY29tIiwicm9sZSI6IkxpYnJhcmlhbiJ9LCJpYXQiOjE3MDk3MDE5MTUsImV4cCI6MTcwOTcwNjcxNX0.iRRkuOnnMZKsWb77vAL64MA3uMZ-iStK6RtqUSfXiCU"
const headers = new HttpHeaders({
    'Authorization':`Bearer ${this.token}`,
    
   });
  return this.http.post<issueModel[]>(`http://localhost:8080/catController//issueBooks/${id}`,books,{headers:headers}).pipe(map((res)=>{
     return res;
   }))

}

deleteStudentList(id:string){
  this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWx1ZSI6eyJpZCI6IjY1ZDJlZTkwOWVhYmVjYjE5MzgxN2IyZCIsIm5hbWUiOiJWaWpheSIsImVtYWlsIjoidmlqYXlAZ21haWwuY29tIiwicm9sZSI6IkxpYnJhcmlhbiJ9LCJpYXQiOjE3MDk3MDE5MTUsImV4cCI6MTcwOTcwNjcxNX0.iRRkuOnnMZKsWb77vAL64MA3uMZ-iStK6RtqUSfXiCU"
 
const headers = new HttpHeaders({
   'Authorization':`Bearer ${this.token}`,
   
  });
 return this.http.delete(`http://localhost:8080/catController/student/${id}`,{headers:headers}).pipe(map((res)=>{
    return res;
  }))
}

updateStudents(id:any,list:any){
  this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWx1ZSI6eyJpZCI6IjY1ZDJlZTkwOWVhYmVjYjE5MzgxN2IyZCIsIm5hbWUiOiJWaWpheSIsImVtYWlsIjoidmlqYXlAZ21haWwuY29tIiwicm9sZSI6IkxpYnJhcmlhbiJ9LCJpYXQiOjE3MDk3MDE5MTUsImV4cCI6MTcwOTcwNjcxNX0.iRRkuOnnMZKsWb77vAL64MA3uMZ-iStK6RtqUSfXiCU"
const headers = new HttpHeaders({
   'Authorization':`Bearer ${this.token}`,
   
  });
 return this.http.put(`http://localhost:8080/catController/students/${id}`,list,{headers:headers}).pipe(map((res)=>{
    return res;
  }))
}
}
