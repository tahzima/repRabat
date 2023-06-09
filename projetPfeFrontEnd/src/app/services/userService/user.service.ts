import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/api/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  public getUser(id: number): Observable<any> {
    return this.http.get(`${this.userUrl}/${id}`);
  }

  public save(user: User) {
    return this.http.post<User>(`${this.userUrl}/`,user);
  }

  public update(user: User) {
    return this.http.put(`${this.userUrl}/update`, user);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.userUrl}/delete/${id}`);
  }

  public auth(email: String, password: String): Observable<any> {
    return this.http.get(`${this.userUrl}/auth/${email}/${password}`);
  }

  ngOnInit(): void {
  }
}
