import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dragDrop } from './drag-drop.component';

describe('DragDropComponent', () => {
  let component: dragDrop;
  let fixture: ComponentFixture<dragDrop>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [dragDrop]
    });
    fixture = TestBed.createComponent(dragDrop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
