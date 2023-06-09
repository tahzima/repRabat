import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fournisseur } from 'src/app/models/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  fournisseurUrl: string;

  constructor(private http: HttpClient) {
    this.fournisseurUrl = 'http://localhost:8080/api/fournisseurs';
  }

  public findAll(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(this.fournisseurUrl);
  }

  public getDepartement(id: number): Observable<any> {
    return this.http.get(`${this.fournisseurUrl}/${id}`);
  }

  public save(fournisseur: Fournisseur) {
    return this.http.post<Fournisseur>(`${this.fournisseurUrl}/`,fournisseur);
  }

  public update(fournisseur: Fournisseur) {
    return this.http.put(`${this.fournisseurUrl}/update`, fournisseur);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.fournisseurUrl}/delete/${id}`);
  }

  ngOnInit(): void {
  }
}
