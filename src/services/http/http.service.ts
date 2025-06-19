import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Strings } from '../../enum/strings.enum';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private _router = inject(Router);

  logout(): void {
    localStorage.removeItem(Strings.lOGGED_IN_USER);
    this.navigateByUrl('/login');
  }

  navigateByUrl(url: string): void {
    this._router.navigateByUrl(url);
  }
}
