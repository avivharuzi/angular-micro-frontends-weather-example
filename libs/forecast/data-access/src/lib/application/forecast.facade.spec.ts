import { TestBed } from '@angular/core/testing';

import { ForecastFacade } from './forecast.facade';

describe('ForecastFacade', () => {
  let service: ForecastFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
