import { TestBed } from '@angular/core/testing';

import { ChoicefieldserviceService } from './choicefieldservice.service';

describe('ChoicefieldserviceService', () => {
  let service: ChoicefieldserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoicefieldserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
