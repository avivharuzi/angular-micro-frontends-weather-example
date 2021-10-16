import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'weather-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private router: Router) {}

  async onSearch(value: string): Promise<void> {
    await this.router.navigate(['/forecast'], {
      queryParams: {
        cityName: value,
      },
      queryParamsHandling: 'merge',
    });
  }
}
