import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadpictureComponent } from './uploadpicture.component';

describe('UploadpictureComponent', () => {
  let component: UploadpictureComponent;
  let fixture: ComponentFixture<UploadpictureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadpictureComponent]
    });
    fixture = TestBed.createComponent(UploadpictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
