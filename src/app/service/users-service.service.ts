import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../Model/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  private url = "http://localhost:8080/api/user"

  constructor(private http: HttpClient) { }

  getAll(): Observable<user[]>{
    return  this.http.get<user[]>(`${this.url}/get-all-users`)
  }

  get(id: number|string): Observable<user>{
    return this.http.get<user>(`${this.url}/get-user/${id}`)
  }

  post(user: user){
    return this.http.post<user>(`${this.url}/create-user`,user)
  }

  update(id: number|string, user: user): Observable<user>{
    return this.http.put<user>(`${this.url}/update-user/${id}`, user)
  }

  delete(id:number|string): Observable<user>{
    return this.http.delete<user>(`${this.url}/delete-user/${id}`)
  }
}
