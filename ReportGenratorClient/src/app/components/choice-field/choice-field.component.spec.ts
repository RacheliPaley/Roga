import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceFieldComponent } from './choice-field.component';

describe('ChoiceFieldComponent', () => {
  let component: ChoiceFieldComponent;
  let fixture: ComponentFixture<ChoiceFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoiceFieldComponent]
    });
    fixture = TestBed.createComponent(ChoiceFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
