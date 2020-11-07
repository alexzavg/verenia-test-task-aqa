import { Component } from '@angular/core';

interface INavList {
  id: string;
  name: string;
  link: string;
}

@Component({
  selector: 'app-header',
  template: `
    <header>
      <nav><a *ngFor="let navItem of navList" [routerLink]="navItem.link">{{navItem.name}}</a></nav>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navList: INavList[] = [
    {id: 'home', name: 'Home', link: '/'},
    {id: 'favorites', name: 'Favorites', link: '/favorites'}
  ];

  constructor() {}
}
