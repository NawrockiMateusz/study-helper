import { Component, OnDestroy, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from '../services/sidenav.service';
import { Subscription } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule,
    NgIf,
    MatButtonModule,
    RouterOutlet,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnDestroy {
  sidenavService = inject(SidenavService);

  @ViewChild('drawer') drawer!: MatDrawer;

  subscription!: Subscription;

  ngOnInit() {
    this.subscription = this.sidenavService.sidebarToggle$.subscribe(() => {
      if (this.drawer) {
        this.drawer.toggle();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
