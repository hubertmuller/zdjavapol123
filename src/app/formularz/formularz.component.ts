import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnDestroy {

  public pierwszyRaz = true;
  public forma = new FormGroup( {
    imie: new FormControl("", {
      validators: [Validators.pattern('[a-zA-Z]{2,}'), Validators.required],
      updateOn: "change"
    } ),
    nazwisko: new FormControl("", {
      validators: [Validators.pattern('[a-zA-Z\-]{3,}'), Validators.required],
      updateOn: "change"
    } ),
    wiek: new FormControl("", {
      validators: [Validators.min(18), Validators.required],
      updateOn: "change"
    } )
  });
  private subForma: Subscription;
  private subImie: Subscription;

  constructor () {
    this.subForma = this.forma.valueChanges.subscribe(
      (_) => {
        this.pierwszyRaz = false;
      }
    );
    this.subImie = this.forma.controls.imie.valueChanges.subscribe(
      (value) => {
        if (value == 'Adam') {
          this.forma.controls.nazwisko.setValue("Nowak");
        }
      }
    );
  } 
  
  ngOnDestroy(): void {
    this.subForma.unsubscribe();
    this.subImie.unsubscribe();
  }

  public zmien(): void {
    this.forma.controls.imie.setValue("Adam");
  }
}
