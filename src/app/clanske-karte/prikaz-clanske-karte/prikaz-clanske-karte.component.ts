import { Component, OnInit, Input } from '@angular/core';
import { ClanskaKarta } from '../model/clanskaKarta';

@Component({
  selector: 'app-prikaz-clanske-karte',
  templateUrl: './prikaz-clanske-karte.component.html',
  styleUrls: ['./prikaz-clanske-karte.component.scss']
})
export class PrikazClanskeKarteComponent implements OnInit {
  @Input() checkedClanska: ClanskaKarta;

  constructor() { }

  ngOnInit() {
  }

}
