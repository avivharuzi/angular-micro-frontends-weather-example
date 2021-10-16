import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import(
            '@angular-micro-frontends-weather-example/forecast/feature-main'
          ).then(({ ForecastFeatureMainModule }) => ForecastFeatureMainModule),
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
