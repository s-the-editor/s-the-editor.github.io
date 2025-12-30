import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-menu',
  imports: [
    RouterModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

}
