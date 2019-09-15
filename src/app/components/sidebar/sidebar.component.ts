import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/pocetna', title: 'Početna', icon: 'house', class: '' },
  { path: '/korisnici', title: 'Korisnici', icon: 'group', class: '' },
  { path: '/treninzi', title: 'Treninzi', icon: 'fitness_center', class: '' },
  { path: '/clanske-karte', title: 'Članske karte', icon: 'contact_mail', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
