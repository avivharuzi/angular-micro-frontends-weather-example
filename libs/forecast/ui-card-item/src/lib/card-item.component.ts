import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Forecast } from '@angular-micro-frontends-weather-example/forecast/data-access';

@Component({
  selector: 'forecast-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemComponent {
  @Input() forecast: Forecast | null = null;
}
