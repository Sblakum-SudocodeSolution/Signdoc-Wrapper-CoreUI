import { Component, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { StepperModule } from 'primeng/stepper';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'app-add-document',
  imports: [MatButtonModule, MatMenuModule, StepperModule],
  templateUrl: './add-document.component.html',
  styleUrl: './add-document.component.scss',
})
export class AddDocumentComponent {
  private _httpService = inject(HttpService);

  redirectRecipientsRoute(): void {
    this._httpService.navigateByUrl('/document/add-recipient');
  }

  showDropdownMenu(): void {
    document.getElementById('fileUploadMenu')?.classList.toggle('show');
  }
}
