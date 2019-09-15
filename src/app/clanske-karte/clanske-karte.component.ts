import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Korisnik } from 'app/korisnici/model/korisnik';
import { ApiService } from 'app/shared/api.service';
import { Trening } from 'app/treninzi/model/trening';
import { ClanskaKarta } from './model/clanskaKarta';

@Component({
  selector: 'app-clanske-karte',
  templateUrl: './clanske-karte.component.html',
  styleUrls: ['./clanske-karte.component.scss']
})
export class ClanskeKarteComponent implements OnInit {

  statusi = ['Važeća', 'Nevažeća'];
  korisnik: string;
  trening: string;
  status: string;
  korisnici: Korisnik[];
  treninzi: Trening[];
  checkedClanska: ClanskaKarta;
  clanskeKarte: ClanskaKarta[];
  updateClanskeKarte: ClanskaKarta[];
  openUnosClanskeBOOL = false;
  openPrikazClanskeBOOL = false;
  openIzmenaClanskeBOOL = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.popuniComboBoxKorisnici();
    this.popuniComboBoxTreninzi();
    this.allClanskeKarte();
  }

  popuniComboBoxKorisnici() {
    this.api.getKorisnici().subscribe(
      res => {
        this.korisnici = res;
      },
      err => {
        alert("Nije moguće učitati korisnike!");
      }
    );
  }

  popuniComboBoxTreninzi() {
    this.api.getTreninzi().subscribe(
      res => {
        this.treninzi = res;
      },
      err => {
        alert("Nije moguće učitati treninge!");
      }
    );
  }

  public allClanskeKarte() {
    this.api.getClanskeKarte().subscribe(
      res => {
        this.clanskeKarte = res;
      },
      err => {
        alert("Nije moguće pronaći članske karte!");
      }
    );
  }

  searchClanskeKarte() {
    this.resetujVrednosti();
    this.api.searchClanskeKarte(this.korisnik, this.trening, this.status).subscribe(
      res => {
        this.clanskeKarte = res;
      },
      err => {
        alert("Nije moguće pronaći članske karte!");
      }
    );
    this.resetujPolja();
  }

  onSelect(event, index) {
    this.checkedClanska = this.clanskeKarte[index];
  }

  newClanskeKarte(clanskeKarte: ClanskaKarta[]) {
    this.updateClanskeKarte = clanskeKarte;
    this.clanskeKarte = this.updateClanskeKarte;
  }

  resetujPolja() {
    this.trening = null;
    this.korisnik = null;
    this.status = null;
  }

  openUnosClanske() {
    this.openIzmenaClanskeBOOL = false;
    this.openPrikazClanskeBOOL = false;
    this.openUnosClanskeBOOL = true;
  }

  openPrikazClanske() {
    this.openIzmenaClanskeBOOL = false;
    this.openUnosClanskeBOOL = false;
    this.openPrikazClanskeBOOL = true;
    this.allClanskeKarte();
  }

  openIzmenaClanske() {
    this.openPrikazClanskeBOOL = false;
    this.openUnosClanskeBOOL = false;
    this.openIzmenaClanskeBOOL = true;
  }

  resetujVrednosti() {
    korisnik: undefined;
    trening: undefined;
    status: undefined;
  }

}
