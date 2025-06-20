import { Component, inject } from '@angular/core';
// import { ContainerComponent } from '@coreui/angular';
import { HttpService } from '../../../../services/http/http.service';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-document-dashboard',
  imports: [CardModule, ButtonModule, CommonModule],
  templateUrl: './document-dashboard.component.html',
  styleUrl: './document-dashboard.component.scss',
})
export class DocumentDashboardComponent {
  visible: boolean = false;
  isPopupShow: boolean = false;
  isUrlShow: boolean = false;

  private _httpService = inject(HttpService);

  redirectDocumentRoute(): void {
    this._httpService.navigateByUrl('/document/add-document');
  }

  toggleMenuPopup(): void {
    this.isPopupShow = !this.isPopupShow;
  }

  toggleUrlPopup(): void {
    this.isPopupShow = false;
    this.isUrlShow = !this.isUrlShow;
  }
}
