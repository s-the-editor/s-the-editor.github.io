import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { Menu } from '../menu/menu';

@Component({
  selector: 'app-about',
  imports: [
    MatButtonModule,
    Menu,
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
