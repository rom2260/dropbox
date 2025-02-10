import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { provideAnimations } from "@angular/platform-browser/animations";

import { AppComponent } from "./app/app.component";
import { appRouteProvider, routes } from "./app/app.routes";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    // appRouteProvider,
    provideHttpClient(),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
