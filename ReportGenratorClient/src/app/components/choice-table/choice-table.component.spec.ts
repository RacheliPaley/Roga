import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceTableComponent } from './choice-table.component';

describe('ChoiceTableComponent', () => {
  let component: ChoiceTableComponent;
  let fixture: ComponentFixture<ChoiceTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoiceTableComponent]
    });
    fixture = TestBed.createComponent(ChoiceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
