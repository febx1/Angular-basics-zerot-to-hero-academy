import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//jit
import { AppModule } from './app/app.module';
//app modules
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
/*platformbrowserdynamic - info about browser
bootstrapmodule - glues every modules with appmodule
enableProdMode - enabling produciton mode to disable twice change detection
*/
