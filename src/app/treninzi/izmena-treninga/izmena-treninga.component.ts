import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trening } from '../model/trening';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'app-izmena-treninga',
  templateUrl: './izmena-treninga.component.html',
  styleUrls: ['./izmena-treninga.component.scss']
})
export class IzmenaTreningaComponent implements OnInit {
  @Input() checkedTrening: Trening;
  @Input() treninzi: Trening[];
  @Output() updateTreninzi = new EventEmitter<Trening[]>();

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  public putTrening() {
    this.api.putTrening(this.checkedTrening).subscribe(
      res => {
        this.checkedTrening = res;
        this.obnoviListu();
        alert("Trening je izmenjen!");
      },
      err => {
        alert("Nije moguće izmeniti trening!");
      }
    );
  }

  public obnoviListu() {
    this.api.getTreninzi().subscribe(
      res => {
        this.updateTreninzi.emit(res);
      },
      err => {
        alert("Nije moguće pronaći špeditere!");
      }
    );
  }

}
