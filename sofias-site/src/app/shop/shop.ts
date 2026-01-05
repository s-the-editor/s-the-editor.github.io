import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { Menu } from '../menu/menu';

@Component({
  selector: 'app-shop',
  imports: [
    MatButtonModule,
    Menu
  ],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {

}
