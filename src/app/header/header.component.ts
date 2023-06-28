import { Component, inject } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class HeaderComponent {
  sidenavService = inject(SidenavService);

  toggleSidebar() {
    this.sidenavService.toggleSidebar();
  }
}
