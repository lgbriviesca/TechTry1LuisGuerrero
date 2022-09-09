import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenBookingModalComponent } from './open-booking-modal.component';

describe('OpenBookingModalComponent', () => {
  let component: OpenBookingModalComponent;
  let fixture: ComponentFixture<OpenBookingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenBookingModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenBookingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
