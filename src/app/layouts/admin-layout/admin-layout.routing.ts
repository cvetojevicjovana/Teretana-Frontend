import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { KorisniciComponent } from 'app/korisnici/korisnici.component';
import { TreninziComponent } from 'app/treninzi/treninzi.component';
import { ClanskeKarteComponent } from 'app/clanske-karte/clanske-karte.component';
import { AuthGaurdService } from 'app/service/auth-gaurd.service';

export const AdminLayoutRoutes: Routes = [
    { path: 'pocetna', component: DashboardComponent, canActivate: [AuthGaurdService] },
    { path: 'korisnici', component: KorisniciComponent, canActivate: [AuthGaurdService] },
    { path: 'treninzi', component: TreninziComponent, canActivate: [AuthGaurdService] },
    { path: 'clanske-karte', component: ClanskeKarteComponent, canActivate: [AuthGaurdService] }
];
