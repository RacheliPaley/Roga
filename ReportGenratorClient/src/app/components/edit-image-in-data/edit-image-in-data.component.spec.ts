import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImageInDataComponent } from './edit-image-in-data.component';

describe('EditImageInDataComponent', () => {
  let component: EditImageInDataComponent;
  let fixture: ComponentFixture<EditImageInDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditImageInDataComponent]
    });
    fixture = TestBed.createComponent(EditImageInDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
