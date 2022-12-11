import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PogodaService {

  public id = 0;

  constructor (private http: HttpClient) {
    this.id = Math.floor(Math.random()*100);
    console.log('uruchomiono konstruktor PogodaService o id=' + this.id);
  }

  konwertuj(stopnie:number):number {
    return stopnie/1000;
  }

  pobierzPogode():Observable<PogodaMiasto[]> {
    return this.http.get<PogodaMiasto[]>(
      'https://6395b39490ac47c680714f1a.mockapi.io/pogoda-miasta'
      );
  }

}

export interface PogodaMiasto {
  miasto: string;
  temperatura: number;
  cisnienie: number;
  id: string;
}
