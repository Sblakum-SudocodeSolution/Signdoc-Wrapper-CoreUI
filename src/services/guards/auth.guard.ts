import { CanActivateFn } from '@angular/router';
import { Strings } from '../../enum/strings.enum';
import { inject } from '@angular/core';
import { HttpService } from '../http/http.service';

export const authGuard: CanActivateFn = (state, route) => {
  const token = localStorage.getItem(Strings.lOGGED_IN_USER);
  const _httpService = inject(HttpService);

  if (token != null) {
    return true;
  } else {
    _httpService.navigateByUrl('/login');
    return false;
  }
};
