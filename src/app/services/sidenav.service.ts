import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private sidebarToggle = new Subject<void>();
  sidebarToggle$ = this.sidebarToggle.asObservable();

  toggleSidebar() {
    this.sidebarToggle.next();
  }
}
