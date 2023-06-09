import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from 'src/app/models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  reclamationUrl: string;

  constructor(private http: HttpClient) {
    this.reclamationUrl = 'http://localhost:8080/api/reclamation';
  }

  public findAll(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(this.reclamationUrl);
  }

  public getReclamation(id: number): Observable<any> {
    return this.http.get(`${this.reclamationUrl}/${id}`);
  }

  public save(reclamation: Reclamation) {
    return this.http.post<Reclamation>(`${this.reclamationUrl}/`,reclamation);
  }

  public update(reclamation: Reclamation) {
    return this.http.put(`${this.reclamationUrl}/update`, reclamation);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.reclamationUrl}/delete/${id}`);
  }

  ngOnInit(): void {
  }
}
