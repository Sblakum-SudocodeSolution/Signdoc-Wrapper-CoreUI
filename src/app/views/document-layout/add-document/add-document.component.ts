import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-document',
  imports: [MatButtonModule, MatMenuModule, RouterLink],
  templateUrl: './add-document.component.html',
  styleUrl: './add-document.component.scss',
})
export class AddDocumentComponent {
  showDropdownMenu(): void {
    document.getElementById('docUploadMenu')?.classList.toggle('show');
  }
}
