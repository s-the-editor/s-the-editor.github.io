import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { Menu } from '../menu/menu';


@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    Menu,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
