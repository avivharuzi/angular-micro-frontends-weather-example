import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ForecastUiCardItemModule } from '@angular-micro-frontends-weather-example/forecast/ui-card-item';
import { SharedUiAlertModule } from '@angular-micro-frontends-weather-example/shared/ui-alert';

import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: MainComponent },
    ]),
    ForecastUiCardItemModule,
    SharedUiAlertModule,
  ],
  declarations: [MainComponent],
})
export class ForecastFeatureMainModule {}
