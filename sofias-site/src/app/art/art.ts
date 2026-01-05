import { Component } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';

import { Menu } from '../menu/menu';

@Component({
  selector: 'app-art',
  imports: [
    MatTooltipModule,
    Menu
  ],
  templateUrl: './art.html',
  styleUrl: './art.css',
})
export class Art {

}
