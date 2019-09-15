import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'app/shared/api.service';
import { Korisnik } from 'app/korisnici/model/korisnik';
import { Trening } from 'app/treninzi/model/trening';
import { ClanskaKarta, Termin } from '../model/clanskaKarta';

@Component({
  selector: 'app-unos-clanske-karte',
  templateUrl: './unos-clanske-karte.component.html',
  styleUrls: ['./unos-clanske-karte.component.scss']
})
export class UnosClanskeKarteComponent implements OnInit {
  @Input() clanskeKarte: ClanskaKarta[];
  @Output() updateClanskeKarte = new EventEmitter<ClanskaKarta[]>();

  korisnici: Korisnik[];
  treninzi: Trening[];

  clanskaKarta: ClanskaKarta = {
    clanskaKartaID: 0,
    datumUplate: null,
    datumVazenja: null,
    status: '',
    brojIskoriscenihTermina: 0,
    trening: null,
    korisnik: null,
    termini: []
  }

  statusi = ['Važeća', 'Nevažeća'];

  datum: Date;
  vreme: string;
  termini: Termin[] = [];

  selektovanKorsinik: Korisnik;
  selektovanTrening: Trening;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.popuniComboBoxKorisnici();
    this.popuniComboBoxTreninzi();
  }

  popuniComboBoxKorisnici() {
    this.api.getKorisnici().subscribe(
      res => {
        this.korisnici = res;
      },
      err => {
        alert("Nije moguce ucitati korisnike!");
      }
    );
  }

  popuniComboBoxTreninzi() {
    this.api.getTreninzi().subscribe(
      res => {
        this.treninzi = res;
      },
      err => {
        alert("Nije moguce ucitati treninge!");
      }
    );
  }

  public saveClanskaKarta() {
    this.clanskaKarta.termini = this.termini;
    this.clanskaKarta.korisnik = this.selektovanKorsinik;
    this.clanskaKarta.trening = this.selektovanTrening;
    this.clanskaKarta.brojIskoriscenihTermina = this.termini.length;
    this.api.saveClanskaKarta(this.clanskaKarta).subscribe(
      res => {
        alert("Clanska karta je sacuvana!");
        this.clanskeKarte.push(res);
        this.updateClanskeKarte.emit(this.clanskeKarte);
      },
      err => {
        alert("Nije moguce sacuvati clansku kartu!");
      }
    );
    this.resetujPolja();
  }

  dodajStavku() {
    var termin: Termin = {
      terminID: {
        clanskaKartaID: 0,
        redniBroj: 1
      },
      datumOdrzavanja: this.datum,
      vremeOdrzavanja: this.vreme + ':00'
    }
    this.termini.push(termin);
    this.postaviRedneBrojeve();
    this.datum = null;
    this.vreme = null;
  }

  public postaviRedneBrojeve() {
    var redniBroj: number = 1;
    this.termini.forEach(t => {
      t.terminID.redniBroj = redniBroj;
      redniBroj = redniBroj + 1;
    });
  }

  obrisiStavku(termin: Termin) {
    for (let i = 0; i < this.termini.length; ++i) {
      if (this.termini[i].terminID.redniBroj === termin.terminID.redniBroj) {
        this.termini.splice(i, 1);
      }
    }
    this.postaviRedneBrojeve();
  }

  postaviKorisnika(korisnik) {
    this.selektovanKorsinik = korisnik;
    this.findKorisnik(korisnik.korisnikID);
  }

  postaviTrening(trening) {
    this.selektovanTrening = trening;
    this.findTrening(trening.treningID);
  }

  findKorisnik(id: number) {

    this.api.findKorisnik(id).subscribe(
      res => {
        this.clanskaKarta.korisnik = res;
      },
      err => {
        alert("Nije moguće pronaći korisnika!");
      }
    );

  }
  findTrening(id: number) {

    this.api.findTrening(id).subscribe(
      res => {
        this.clanskaKarta.trening = res;
      },
      err => {
        alert("Nije moguće pronaći trening!");
      }
    );

  }

  resetujPolja() {
    this.clanskaKarta.clanskaKartaID = null;
    this.selektovanKorsinik.imePrezime = null;
    this.selektovanTrening.nazivTreninga = null;
    this.clanskaKarta.datumUplate = null;
    this.clanskaKarta.datumVazenja = null;
    this.clanskaKarta.status = null;
    this.termini = null;
  }

}
