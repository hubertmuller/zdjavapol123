import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PogodaService } from '../pogoda.service';

@Component({
  selector: 'app-wiadomosc',
  templateUrl: './wiadomosc.component.html',
  styleUrls: ['./wiadomosc.component.scss'],
  providers: [PogodaService]
})
export class WiadomoscComponent implements OnInit, OnDestroy{
  @Input("mojtytul")
  public tytul = "probny tytul";
  @Input()
  public lead = "lead probny";
  public id: number = 0;

  constructor(private pogoda: PogodaService, private route: ActivatedRoute) {
    console.log(pogoda.id);
  }
  ngOnInit(): void {
    this.route.params.subscribe( (params) => {
      this.id = params['id'] as number;
    }
    )
  }
  ngOnDestroy(): void {
    console.log('koniec zycia komonentu wiadomosc');
  }
}
