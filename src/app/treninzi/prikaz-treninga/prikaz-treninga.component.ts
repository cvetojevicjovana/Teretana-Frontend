import { Component, OnInit, Input } from '@angular/core';
import { Trening } from '../model/trening';

@Component({
  selector: 'app-prikaz-treninga',
  templateUrl: './prikaz-treninga.component.html',
  styleUrls: ['./prikaz-treninga.component.scss']
})
export class PrikazTreningaComponent implements OnInit {
  @Input() checkedTrening: Trening;
  constructor() { }

  ngOnInit() {
  }

}
