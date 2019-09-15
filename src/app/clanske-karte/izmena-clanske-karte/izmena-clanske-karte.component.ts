import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClanskaKarta, Termin } from '../model/clanskaKarta';
import { Korisnik } from 'app/korisnici/model/korisnik';
import { Trening } from 'app/treninzi/model/trening';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'app-izmena-clanske-karte',
  templateUrl: './izmena-clanske-karte.component.html',
  styleUrls: ['./izmena-clanske-karte.component.scss']
})
export class IzmenaClanskeKarteComponent implements OnInit {
  @Input() checkedClanska: ClanskaKarta;
  @Input() clanskeKarte: ClanskaKarta[];
  @Output() updateClanskeKarte = new EventEmitter<ClanskaKarta[]>();

  korisnici: Korisnik[];
  treninzi: Trening[];

  statusi = ['Važeća', 'Nevažeća'];

  datum: Date;
  vreme: string;

  selektovanKorsinik: Korisnik;
  selektovanTrening: Trening;

  termini: Termin[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.postaviRedneBrojeve();
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


  public postaviRedneBrojeve() {
    var redniBroj: number = 1;
    this.checkedClanska.termini.forEach(t => {
      t.terminID.redniBroj = redniBroj;
      redniBroj = redniBroj + 1;
    });
  }

  public saveClanskaKarta() {
    this.checkedClanska.brojIskoriscenihTermina = this.checkedClanska.termini.length;
    console.log(this.checkedClanska.trening.nazivTreninga + ' ' + this.checkedClanska.korisnik.imePrezime);
    this.api.putClanskaKarta(this.checkedClanska).subscribe(
      res => {
        this.checkedClanska = res;
        this.obnoviListu();
        alert("Clanska karta je sacuvana!");
      },
      err => {
        alert("Nije moguce sacuvati clansku kartu!");
      }
    );
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
    this.checkedClanska.termini.push(termin);
    this.postaviRedneBrojeve();
  }

  obrisiStavku(termin: Termin) {
    console.log('Obrisi..');
    for (let i = 0; i < this.checkedClanska.termini.length; ++i) {
      if (this.checkedClanska.termini[i].terminID === termin.terminID) {
        this.checkedClanska.termini.splice(i, 1);
      }
    }
    this.postaviRedneBrojeve();
  }

  postaviKorisnika(korisnik) {
    this.selektovanKorsinik = korisnik;
    this.checkedClanska.korisnik = korisnik;
    this.findKorisnik(korisnik.korisnikID);
  }

  postaviTrening(trening) {
    this.selektovanTrening = trening;
    this.checkedClanska.trening = trening;
    this.findTrening(trening.treningID);
  }

  findKorisnik(id: number) {

    this.api.findKorisnik(id).subscribe(
      res => {
        this.selektovanKorsinik = res;
      },
      err => {
        alert("Nije moguće pronaći korisnika!");
      }
    );

  }

  findTrening(id: number) {

    this.api.findTrening(id).subscribe(
      res => {
        this.selektovanTrening = res;
      },
      err => {
        alert("Nije moguće pronaći trening!");
      }
    );

  }

  public obnoviListu() {
    this.api.getClanskeKarte().subscribe(
      res => {
        this.updateClanskeKarte.emit(res);
      },
      err => {
        alert("Nije moguće pronaći članske karte!");
      }
    );
  }
}
