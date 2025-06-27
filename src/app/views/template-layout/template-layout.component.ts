import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-template-layout',
  imports: [RouterOutlet],
  template: '<router-outlet />',
  styleUrl: './template-layout.component.scss',
})
export class TemplateLayoutComponent {}
