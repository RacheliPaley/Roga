import { TestBed } from '@angular/core/testing';

import { ChoicetableServiceService } from './choicetable.service.service';

describe('ChoicetableServiceService', () => {
  let service: ChoicetableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoicetableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
