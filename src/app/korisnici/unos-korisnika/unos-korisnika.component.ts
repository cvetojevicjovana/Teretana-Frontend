import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'app/shared/api.service';
import { Korisnik, Radnik } from '../model/korisnik';
import { AuthenticationService } from 'app/service/authentication.service';

@Component({
  selector: 'app-unos-korisnika',
  templateUrl: './unos-korisnika.component.html',
  styleUrls: ['./unos-korisnika.component.scss']
})
export class UnosKorisnikaComponent implements OnInit {
  @Input() korisnici: Korisnik[];
  @Output() updateKorisnici = new EventEmitter<Korisnik[]>();

  korisnik: Korisnik = {
    korisnikID: 0,
    imePrezime: '',
    email: '',
    telefon: '',
    radnik: null
  }

  radnik: Radnik = {
    radnikID: 0,
    imePrezime: '',
    username: '',
    password: '',
    telefon: '',
  }

  username: string

  constructor(private api: ApiService, private loginservice: AuthenticationService) { }

  ngOnInit() {
    this.username = this.loginservice.currentUser();
    console.log("STIGLO: " + this.username);
  }

  public saveKorisnik() {
    this.api.findRadnik(this.username).subscribe(
      res => {
        this.korisnik.radnik = res;
        console.log(this.korisnik.radnik);
        this.api.saveKorisnik(this.korisnik).subscribe(
          res => {
            alert("Korisnik je sačuvan!");
            this.korisnici.push(res);
            this.updateKorisnici.emit(this.korisnici);
            this.resetujPolja();
          },
          err => {
            alert("Nije moguće sačuvati korisnika!");
          }
        );
      },
      err => {
      }
    );


  }

  resetujPolja() {
    this.korisnik.korisnikID = null;
    this.korisnik.radnik = null;
    this.korisnik.email = null;
    this.korisnik.imePrezime = null;
    this.korisnik.telefon = null;
  }

}
