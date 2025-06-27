import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../../services/http/http.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-plans-pricing',
  imports: [FormsModule,RouterLink],
  templateUrl: './plans-pricing.component.html',
  styleUrl: './plans-pricing.component.scss',
})
export class PlansPricingComponent {
  checked: boolean = false;
  private _httpService = inject(HttpService);

  ngOnInit() {
    this.checkIconsColor();
  }

  redirectToHome(): void {
    this._httpService.navigateByUrl('/dashboard');
  }

  checkIconsColor(): void {
    const icon = document.getElementById('card-icons')?.children;
  }
}
