import { Injectable } from '@angular/core';
import { ApiService } from 'app/shared/api.service';
import { Radnik } from 'app/korisnici/model/korisnik';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  ulogovani: string;
  proveravaniRadnik: Radnik;
  idRadnika: number;

  constructor(private api: ApiService) {
    this.proveravaniRadnik = null;
  }

  authenticate(username, password) {
    this.proveriRadnika(username, password);
    if (this.proveravaniRadnik != null && username === this.proveravaniRadnik.username && password === this.proveravaniRadnik.password) {
      sessionStorage.setItem('username', username)
      this.ulogovani = "\t" + this.proveravaniRadnik.imePrezime;
      this.idRadnika = this.proveravaniRadnik.radnikID;
      return true;
    } else {
      return false;
    }
  }


  proveriRadnika(username, password) {
    this.api.loginRadnik(username, password).subscribe(
      res => {
        this.proveravaniRadnik = res;
        console.log(this.proveravaniRadnik);
      },
      err => {
        alert('Greška! Niste ispravno uneli podatke!');
      }
    );
  }

  currentUser() {
    return sessionStorage.getItem('username');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
