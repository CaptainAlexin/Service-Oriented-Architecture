import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recuerdo } from '../models/recuerdo'

@Injectable({
  providedIn: 'root'
})
export class RecuerdosService {

  selectedRecuerdo : Recuerdo;
  recuerdos: Recuerdo[];
  readonly URL_API = 'http://localhost:3000/api/recuerdos'

  constructor(private http:HttpClient) {
    this.selectedRecuerdo = new Recuerdo();
  }

  getRecuerdos () {
    return this.http.get<Recuerdo[]>(this.URL_API);
  }

  postRecuerdo (Recuerdo: Recuerdo) {
    return this.http.post(this.URL_API, Recuerdo)
  }

  putRecuerdo (Recuerdo: Recuerdo) {
    return this.http.put(this.URL_API + `/${Recuerdo._id}`, Recuerdo);
  }

  deleteRecuerdo (_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
