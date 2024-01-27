import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskComponentComponent } from './update-task-component.component';

describe('UpdateTaskComponentComponent', () => {
  let component: UpdateTaskComponentComponent;
  let fixture: ComponentFixture<UpdateTaskComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTaskComponentComponent]
    });
    fixture = TestBed.createComponent(UpdateTaskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
