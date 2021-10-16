import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardItemComponent } from './card-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardItemComponent],
  exports: [CardItemComponent],
})
export class ForecastUiCardItemModule {}
