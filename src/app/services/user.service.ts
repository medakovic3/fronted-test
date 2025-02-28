import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modules/user.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/user/getAllUsers');
  }
}
