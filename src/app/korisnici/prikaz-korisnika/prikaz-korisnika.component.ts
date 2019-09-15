import { Component, OnInit, Input } from '@angular/core';
import { Korisnik } from '../model/korisnik';

@Component({
  selector: 'app-prikaz-korisnika',
  templateUrl: './prikaz-korisnika.component.html',
  styleUrls: ['./prikaz-korisnika.component.scss']
})
export class PrikazKorisnikaComponent implements OnInit {
  @Input() checkedKorisnik: Korisnik;
  constructor() { }

  ngOnInit() {
  }

}
