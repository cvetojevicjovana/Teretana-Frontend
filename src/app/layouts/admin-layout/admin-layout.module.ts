import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { KorisniciComponent } from 'app/korisnici/korisnici.component';
import { UnosKorisnikaComponent } from 'app/korisnici/unos-korisnika/unos-korisnika.component';
import { PrikazKorisnikaComponent } from 'app/korisnici/prikaz-korisnika/prikaz-korisnika.component';
import { IzmenaKorisnikaComponent } from 'app/korisnici/izmena-korisnika/izmena-korisnika.component';
import { TreninziComponent } from 'app/treninzi/treninzi.component';
import { UnosTreningaComponent } from 'app/treninzi/unos-treninga/unos-treninga.component';
import { PrikazTreningaComponent } from 'app/treninzi/prikaz-treninga/prikaz-treninga.component';
import { IzmenaTreningaComponent } from 'app/treninzi/izmena-treninga/izmena-treninga.component';
import { ClanskeKarteComponent } from 'app/clanske-karte/clanske-karte.component';
import { UnosClanskeKarteComponent } from 'app/clanske-karte/unos-clanske-karte/unos-clanske-karte.component';
import { PrikazClanskeKarteComponent } from 'app/clanske-karte/prikaz-clanske-karte/prikaz-clanske-karte.component';
import { TerminiComponent } from 'app/clanske-karte/termini/termini.component';
import { UnosTerminaComponent } from 'app/clanske-karte/termini/unos-termina/unos-termina.component';
import { AuthGaurdService } from 'app/service/auth-gaurd.service';
import { AuthenticationService } from 'app/service/authentication.service';
import { PrikazTerminaComponent } from 'app/clanske-karte/termini/prikaz-termina/prikaz-termina.component';
import { IzmenaClanskeKarteComponent } from 'app/clanske-karte/izmena-clanske-karte/izmena-clanske-karte.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
  ],
  declarations: [
    DashboardComponent,
    KorisniciComponent,
    UnosKorisnikaComponent,
    PrikazKorisnikaComponent,
    IzmenaKorisnikaComponent,
    TreninziComponent,
    UnosTreningaComponent,
    PrikazTreningaComponent,
    IzmenaTreningaComponent,
    ClanskeKarteComponent,
    UnosClanskeKarteComponent,
    PrikazClanskeKarteComponent,
    TerminiComponent,
    UnosTerminaComponent,
    PrikazTerminaComponent,
    IzmenaClanskeKarteComponent
  ],
  providers: [AuthGaurdService, AuthenticationService]
})

export class AdminLayoutModule { }
