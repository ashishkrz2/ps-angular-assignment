import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerUsingServicesComponent } from './timer-using-services.component';

describe('TimerUsingServicesComponent', () => {
  let component: TimerUsingServicesComponent;
  let fixture: ComponentFixture<TimerUsingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerUsingServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerUsingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
