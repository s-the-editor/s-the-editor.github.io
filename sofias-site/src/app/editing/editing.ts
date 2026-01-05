import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { Menu } from '../menu/menu';

@Component({
  selector: 'app-editing',
  imports: [
    MatButtonModule,
    Menu,
  ],
  templateUrl: './editing.html',
  styleUrl: './editing.css',
})
export class Editing {

}
