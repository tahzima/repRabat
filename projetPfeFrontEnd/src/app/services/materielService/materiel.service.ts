import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materiel } from 'src/app/models/materiel';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  materielUrl: string;

  constructor(private http: HttpClient) {
    this.materielUrl = 'http://localhost:8080/api/materiels';
  }

  public findAll(): Observable<Materiel[]> {
    return this.http.get<Materiel[]>(this.materielUrl);
  }

  public getMateriel(id: number): Observable<any> {
    return this.http.get(`${this.materielUrl}/${id}`);
  }

  public save(materiel: Materiel) {
    return this.http.post<Materiel>(`${this.materielUrl}/`,materiel);
  }

  public update(materiel: Materiel) {
    return this.http.put(`${this.materielUrl}/update`, materiel);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.materielUrl}/delete/${id}`);
  }

  ngOnInit(): void {
  }
}
