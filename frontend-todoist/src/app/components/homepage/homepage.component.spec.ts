import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomepageComponent } from './homepage.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageComponent],
      imports: [RouterTestingModule], // Provides Router and ActivatedRoute
    });
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges(); // Render the template
  });

  it('should navigate to tasks page when Get Started button is clicked', () => {
    // Spy on router.navigate
    const navigateSpy = spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));

    // Find the first Get Started button
    const button: DebugElement = fixture.debugElement.query(
      By.css('.btn.btn-actions.align-center')
    );

    // Verify button exists
    if (!button) {
      fail('Get Started button not found. Check selector or template.');
      return;
    }

    // Log button for debugging
    console.log('Button found:', button.nativeElement.textContent);

    // Simulate click
    button.nativeElement.click();
    fixture.detectChanges(); // Ensure change detection after click

    // Check if router.navigate was called with ['/tasks']
    expect(navigateSpy).toHaveBeenCalledWith(['/tasks']);
  });

  it('should have two Get Started buttons that navigate to tasks', () => {
    // Spy on router.navigate
    const navigateSpy = spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));

    // Find all Get Started buttons
    const buttons: DebugElement[] = fixture.debugElement.queryAll(
      By.css('.btn.btn-actions.align-center')
    );

    // Verify two buttons exist
    expect(buttons.length).toBe(2);

    // Test clicking each button
    buttons.forEach((button, index) => {
      button.nativeElement.click();
      fixture.detectChanges();
      expect(navigateSpy).toHaveBeenCalledWith(['/tasks']);
      navigateSpy.calls.reset(); // Reset spy for the next button
    });
  });
});
