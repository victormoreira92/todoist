import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskIndexComponent } from './task-index.component';

describe('TaskIndexComponent', () => {
  let component: TaskIndexComponent;
  let fixture: ComponentFixture<TaskIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskIndexComponent]
    });
    fixture = TestBed.createComponent(TaskIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
