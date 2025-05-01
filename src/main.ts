import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// Removed 'zone.js' import as it should be in polyfills.ts.
// Zone.js is essential for Angular's change detection mechanism.
// It is recommended to include it in polyfills.ts to ensure compatibility across different browsers.
// For more details, see: https://angular.io/guide/zone
// Zone.js is required for Angular's change detection and should be included in polyfills.ts to ensure proper application behavior.

import { AppModule } from './app/app.module'; 

import { environment } from './environments/environment';
import 'zone.js'; 

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    console.error(`Error bootstrapping the application in ${environment.production ? 'production' : 'development'} mode for module: AppModule`, err);
    errorMessage.style.fontSize = '16px';
    errorMessage.style.textAlign = 'center';
    errorMessage.style.marginTop = '20px';
    errorMessage.textContent = 'An error occurred while starting the application. Please try again later.';
    document.body.appendChild(errorMessage);

   // Retry mechanism
let retryCount = 0; 
const maxRetries = 3;
if (retryCount < maxRetries) {
  retryCount++;
  console.log(`Retrying bootstrap... Attempt ${retryCount}`);
  platformBrowserDynamic().bootstrapModule(AppModule).catch(() => {});
}
  });