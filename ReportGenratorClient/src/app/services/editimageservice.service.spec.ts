import { TestBed } from '@angular/core/testing';

import { EditimageserviceService } from './editimageservice.service';

describe('EditimageserviceService', () => {
  let service: EditimageserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditimageserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
