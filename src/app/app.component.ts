import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: '<router-outlet />',
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  title = 'Signdoc Wrapper UI';

  readonly #destroyRef: DestroyRef = inject(DestroyRef);
  readonly #activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  readonly #router = inject(Router);
  readonly #titleService = inject(Title);

  // readonly #colorModeService = inject(ColorModeService);

  constructor() {
    this.#titleService.setTitle(this.title);
    // iconSet singleton
    // this.#colorModeService.localStorageItemName.set(
    //   'signdoc-wrapper-ui-theme-default'
    // );
    // this.#colorModeService.eventName.set('ColorSchemeChange');
  }

  ngOnInit(): void {
    this.#router.events
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
      });

    this.#activatedRoute.queryParams
      .pipe(
        delay(1),
        map((params) => <string>params['theme']?.match(/^[A-Za-z0-9\s]+/)?.[0]),
        // filter((theme) => ['dark', 'light', 'auto'].includes(theme)),
        // tap((theme) => {
        //   this.#colorModeService.colorMode.set(theme);
        // }),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();
  }
}
