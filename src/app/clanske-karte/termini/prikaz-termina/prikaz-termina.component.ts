import { Component, OnInit, Input } from '@angular/core';
import { Termin } from 'app/clanske-karte/model/clanskaKarta';

@Component({
  selector: 'app-prikaz-termina',
  templateUrl: './prikaz-termina.component.html',
  styleUrls: ['./prikaz-termina.component.scss']
})
export class PrikazTerminaComponent implements OnInit {

  @Input() termini: Termin[];
  constructor() { }

  ngOnInit() {
  }

}
