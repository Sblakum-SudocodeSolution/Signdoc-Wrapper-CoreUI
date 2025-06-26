import { Component, inject } from '@angular/core';
import { HttpService } from '../../../../services/http/http.service';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-document-dashboard',
  imports: [CommonModule],
  templateUrl: './document-dashboard.component.html',
  styleUrl: './document-dashboard.component.scss',
})
export class DocumentDashboardComponent {
  visible: boolean = false;
  isPopupShow: boolean = false;
  isUrlPopup: boolean = false;

  private _httpService = inject(HttpService);

  navigateAddDocument(): void {
    this._httpService.navigateByUrl('/document/add-document');
  }

  toggleDocumentPopup(): void {
    this.isPopupShow = !this.isPopupShow;
  }

  toggleUrlPopup(): void {
    this.isPopupShow = false;
    this.isUrlPopup = !this.isUrlPopup;
  }
}
