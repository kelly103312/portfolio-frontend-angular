import { ApplicationConfig, provideZoneChangeDetection, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';

import { routes } from './app.routes';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#e8f0f7',
      100: '#cce0f0',
      200: '#99c2e0',
      300: '#66a3d0',
      400: '#5c92cc',
      500: '#2e76ba',
      600: '#255e95',
      700: '#1c4770',
      800: '#132f4a',
      900: '#0a1825',
      950: '#050c12'
    }
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset
      }
    })
  ],
};
