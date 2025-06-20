import { Component, inject } from '@angular/core';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../../services/http/http.service';
@Component({
  selector: 'app-plans-pricing',
  imports: [FormsModule, ToggleSwitch],
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
    console.log(icon);
  }
}
