import { Component, OnInit, Input } from '@angular/core';
import { Termin } from '../model/clanskaKarta';

@Component({
  selector: 'app-termini',
  templateUrl: './termini.component.html',
  styleUrls: ['./termini.component.scss']
})
export class TerminiComponent implements OnInit {
  @Input() termini: Termin[];
  constructor() { }


  ngOnInit() {

  }

}
