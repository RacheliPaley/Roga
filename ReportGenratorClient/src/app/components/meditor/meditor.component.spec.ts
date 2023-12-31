import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditorComponent } from './meditor.component';

describe('MeditorComponent', () => {
  let component: MeditorComponent;
  let fixture: ComponentFixture<MeditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeditorComponent]
    });
    fixture = TestBed.createComponent(MeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
