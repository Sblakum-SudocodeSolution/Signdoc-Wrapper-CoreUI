import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-document-layout',
  imports: [RouterOutlet],
  template: '<router-outlet />',
  styleUrl: './document-layout.component.scss',
})
export class DocumentLayoutComponent {}
