import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularzComponent } from './formularz/formularz.component';
import { WiadomoscComponent } from './wiadomosc/wiadomosc.component';
import { WiadomosciComponent } from './wiadomosci/wiadomosci.component';

const routes: Routes = [
  {path: 'wiadomosci', component: WiadomosciComponent, children: [
    {path: 'wiadomosc/:id', component: WiadomoscComponent}
  ]},
  {path: 'formularz', component: FormularzComponent},
  {path: '', redirectTo: '/wiadomosci', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
