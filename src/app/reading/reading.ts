import { Component } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';

import { Menu } from '../menu/menu';

@Component({
  selector: 'app-reading',
  imports: [
    MatTooltipModule,
    Menu,
  ],
  templateUrl: './reading.html',
  styleUrl: './reading.css',
})
export class Reading {

}
