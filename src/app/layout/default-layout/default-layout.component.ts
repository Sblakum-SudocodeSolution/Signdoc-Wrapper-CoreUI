import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import {
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarHeaderComponent,
} from '@coreui/angular';

import { DefaultHeaderComponent } from './';
import { navItems } from './_nav';
import { HttpService } from '../../../services/http/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  imports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    DefaultHeaderComponent,
    NgScrollbar,
    RouterOutlet,
    RouterLink,
    ShadowOnScrollDirective,
    RouterLinkActive,
  ],
})
export class DefaultLayoutComponent {
  public navItems = [...navItems];
  private _httpService = inject(HttpService);

  signout(): void {
    this._httpService.logout();
  }
}
