import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Departement } from 'src/app/models/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  departementUrl: string;

  constructor(private http: HttpClient) {
    this.departementUrl = 'http://localhost:8080/api/departements';
  }

  public findAll(): Observable<Departement[]> {
    return this.http.get<Departement[]>(this.departementUrl);
  }

  public getDepartement(id: number): Observable<any> {
    return this.http.get(`${this.departementUrl}/${id}`);
  }

  public save(departement: Departement) {
    return this.http.post<Departement>(`${this.departementUrl}/`,departement);
  }

  public update(departement: Departement) {
    return this.http.put(`${this.departementUrl}/update`, departement);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.departementUrl}/delete/${id}`);
  }

  ngOnInit(): void {
  }
}
