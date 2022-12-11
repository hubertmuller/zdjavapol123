import { Component, Input} from '@angular/core';
import { PogodaService } from '../pogoda.service';

@Component({
  selector: 'app-wiadomosc',
  templateUrl: './wiadomosc.component.html',
  styleUrls: ['./wiadomosc.component.scss'],
  providers: [PogodaService]
})
export class WiadomoscComponent {
  @Input()
  public tytul = "probny tytul";
  @Input()
  public lead = "lead probny";

  constructor(private pogoda: PogodaService) {
    console.log(pogoda.id);
  }
}
