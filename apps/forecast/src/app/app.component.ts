import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'forecast-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
