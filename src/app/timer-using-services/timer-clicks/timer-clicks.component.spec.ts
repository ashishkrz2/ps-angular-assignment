import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerClicksComponent } from './timer-clicks.component';

describe('TimerClicksComponent', () => {
  let component: TimerClicksComponent;
  let fixture: ComponentFixture<TimerClicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerClicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
