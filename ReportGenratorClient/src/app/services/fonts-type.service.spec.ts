import { TestBed } from '@angular/core/testing';

import { FontsTypeService } from './fonts-type.service';

describe('FontsTypeService', () => {
  let service: FontsTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FontsTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
