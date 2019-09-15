import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Korisnik } from './model/korisnik';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.scss']
})
export class KorisniciComponent implements OnInit {
  checkedKorisnik: Korisnik;
  korisnici: Korisnik[];
  updateKorisnici: Korisnik[];
  id: 0;
  imePrezime: null;
  radnik: null;
  openUnosKorisnikaBOOL = false;
  openPrikazKorisnikaBOOL = false;
  openIzmenaKorisnikaBOOL = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.allKorisnici();
  }

  public allKorisnici() {
    this.api.getKorisnici().subscribe(
      res => {
        this.korisnici = res;
      },
      err => {
        alert("Nije moguće pronaći korisnike!");
      }
    );
  }

  searchKorisnici() {
    this.resetujVrednosti();
    this.api.serachKorisnik(this.id, this.imePrezime, this.radnik).subscribe(
      res => {
        this.korisnici = res;
      },
      err => {
        alert("Nije moguće pronaći korisnike!");
      }
    );
    this.resetujPolja();
  }

  onSelect(event, index) {
    this.checkedKorisnik = this.korisnici[index];
  }

  newKorisnici(korisnici: Korisnik[]) {
    this.updateKorisnici = korisnici;
    this.korisnici = this.updateKorisnici;
  }

  resetujPolja() {
    this.id = null;
    this.imePrezime = null;
    this.radnik = null;
  }

  openUnosKorisnika() {
    this.openIzmenaKorisnikaBOOL = false;
    this.openPrikazKorisnikaBOOL = false;
    this.openUnosKorisnikaBOOL = true;
  }

  openPrikazKorisnika() {
    this.openIzmenaKorisnikaBOOL = false;
    this.openUnosKorisnikaBOOL = false;
    this.openPrikazKorisnikaBOOL = true;
    this.allKorisnici();
  }

  openIzmenaKorisnika() {
    this.openPrikazKorisnikaBOOL = false;
    this.openUnosKorisnikaBOOL = false;
    this.openIzmenaKorisnikaBOOL = true;
  }

  resetujVrednosti() {
    id: undefined;
    imePrezime: undefined;
    radnik: undefined;
  }

}
