import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerUsingDecoratorsComponent } from './timer-using-decorators.component';

describe('TimerUsingDecoratorsComponent', () => {
  let component: TimerUsingDecoratorsComponent;
  let fixture: ComponentFixture<TimerUsingDecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerUsingDecoratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerUsingDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
