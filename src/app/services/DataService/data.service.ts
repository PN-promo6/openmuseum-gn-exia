import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Museum } from "../../models/museum/museum";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  public fetchMuseums(): Observable<Museum[]> {
    let obsData: Observable<Museum[]> = this.httpClient.get<Museum[]>('http://localhost:3000/museums');
    return obsData;

  }
}
