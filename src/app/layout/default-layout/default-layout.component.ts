import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
// import { IconDirective } from '@coreui/icons-angular';
import {
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  // ContainerComponent,
  // SidebarFooterComponent,
  // SidebarToggleDirective,
  // SidebarTogglerDirective,
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
    // SidebarNavComponent,
    // SidebarFooterComponent,
    // SidebarToggleDirective,
    // SidebarTogglerDirective,
    // DefaultFooterComponent,
    // IconDirective,
    // ContainerComponent,
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
