import Aura from '@primeng/themes/aura';
import Nora from '@primeng/themes/nora';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { MyCustomPreset } from './theme-preset';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        // preset: Nora,
        preset: MyCustomPreset,
        options: {
          darkModeSelector: '.dark-mode',
        },
      },
    }),
  ],
};
