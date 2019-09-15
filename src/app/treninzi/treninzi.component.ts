import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'app/shared/api.service';
import { Trening } from './model/trening';

@Component({
  selector: 'app-treninzi',
  templateUrl: './treninzi.component.html',
  styleUrls: ['./treninzi.component.scss']
})
export class TreninziComponent implements OnInit {


  treninzi: Trening[];
  updateTreninzi: Trening[];
  checkedTrening: Trening;
  id: 0;
  naziv: null;
  opis: null;
  cena: null;
  openUnosTreningaBOOL = false;
  openPrikazTreningaBOOL = false;
  openIzmenaTreningaBOOL = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.allTreninzi();
  }

  public allTreninzi() {
    this.api.getTreninzi().subscribe(
      res => {
        this.treninzi = res;
      },
      err => {
        alert("Nije moguće pronaći treninge!");
      }
    );
  }

  searchTreninzi() {
    this.resetujVrednosti();
    this.api.serachTreninzi(this.id, this.naziv, this.opis, this.cena).subscribe(
      res => {
        this.treninzi = res;
      },
      err => {
        alert("Nije moguće pronaći treninge!");
      }
    );
    this.resetujPolja();
  }

  onSelect(event, index) {
    this.checkedTrening = this.treninzi[index];
  }


  newTreninzi(treninzi: Trening[]) {
    this.updateTreninzi = treninzi;
    this.treninzi = this.updateTreninzi;
  }

  resetujPolja() {
    this.id = null;
    this.naziv = null;
    this.opis = null;
    this.cena = null;
  }

  openUnosTreninga() {
    this.openIzmenaTreningaBOOL = false;
    this.openPrikazTreningaBOOL = false;
    this.openUnosTreningaBOOL = true;
  }

  openPrikazTreninga() {
    this.openIzmenaTreningaBOOL = false;
    this.openUnosTreningaBOOL = false;
    this.openPrikazTreningaBOOL = true;
    this.allTreninzi();
  }

  openIzmenaTreninga() {
    this.openPrikazTreningaBOOL = false;
    this.openUnosTreningaBOOL = false;
    this.openIzmenaTreningaBOOL = true;
  }

  resetujVrednosti() {
    id: undefined;
    naziv: undefined;
    opis: undefined;
    cena: undefined;
  }

}
