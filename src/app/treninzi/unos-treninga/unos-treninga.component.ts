import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'app/shared/api.service';
import { Trening } from '../model/trening';

@Component({
  selector: 'app-unos-treninga',
  templateUrl: './unos-treninga.component.html',
  styleUrls: ['./unos-treninga.component.scss']
})
export class UnosTreningaComponent implements OnInit {
  @Input() treninzi: Trening[];
  @Output() updateTreninzi = new EventEmitter<Trening[]>();

  trening: Trening = {
    treningID: 0,
    nazivTreninga: '',
    opis: '',
    brojTermina: 0,
    cena: 0
  }

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  public saveTrening() {
    this.api.saveTrening(this.trening).subscribe(
      res => {
        alert("Trening je sačuvan!");
        this.treninzi.push(res);
        this.updateTreninzi.emit(this.treninzi);
      },
      err => {
        alert("Nije moguće sačuvati trening!");
      }
    );
    this.resetujPolja();
  }

  resetujPolja() {
    this.trening.treningID = null;
    this.trening.opis = null;
    this.trening.nazivTreninga = null;
    this.trening.cena = null;
    this.trening.brojTermina = null;
  }

}
