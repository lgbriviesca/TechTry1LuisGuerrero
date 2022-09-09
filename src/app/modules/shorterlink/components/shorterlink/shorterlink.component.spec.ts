import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorterlinkComponent } from './shorterlink.component';

describe('ShorterlinkComponent', () => {
  let component: ShorterlinkComponent;
  let fixture: ComponentFixture<ShorterlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShorterlinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShorterlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
