import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Korisnik } from '../model/korisnik';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'app-izmena-korisnika',
  templateUrl: './izmena-korisnika.component.html',
  styleUrls: ['./izmena-korisnika.component.scss']
})
export class IzmenaKorisnikaComponent implements OnInit {
  @Input() checkedKorisnik: Korisnik;
  @Input() korisnici: Korisnik[];
  @Output() updateKorisnici = new EventEmitter<Korisnik[]>();

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  public putKorisnik() {
    this.api.putKorisnik(this.checkedKorisnik).subscribe(
      res => {
        this.checkedKorisnik = res;
        this.obnoviListu();
        alert("Korisnik je izmenjen!");
      },
      err => {
        alert("Nije moguće izmeniti korisnika!");
      }
    );
  }

  public obnoviListu() {
    this.api.getKorisnici().subscribe(
      res => {
        this.updateKorisnici.emit(res);
      },
      err => {
        alert("Nije moguće pronaći špeditere!");
      }
    );
  }

}
