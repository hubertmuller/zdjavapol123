import { Component } from '@angular/core';
import { PogodaMiasto, PogodaService } from '../pogoda.service';

@Component({
  selector: 'app-wiadomosci',
  templateUrl: './wiadomosci.component.html',
  styleUrls: ['./wiadomosci.component.scss'],
  providers: [PogodaService]
})
export class WiadomosciComponent {
  public pierwszyTytul='Pierwszy artykul';
  public pogodaMiasta: PogodaMiasto[] = [];

  constructor(private pogoda: PogodaService) {
    console.log(pogoda.id);

    pogoda.pobierzPogode().subscribe(
      (pogoda) => {
        this.pogodaMiasta = pogoda;
      }
    );

  }
  wydrukuj():number {
    return this.pogoda.konwertuj(784728);
  }

  konwertuj(x: number):number {
    return this.pogoda.konwertuj(x);
  }

}
