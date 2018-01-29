import { Component } from '@angular/core';

import { MenuModel, MENUS } from './models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menus = MENUS;
}
