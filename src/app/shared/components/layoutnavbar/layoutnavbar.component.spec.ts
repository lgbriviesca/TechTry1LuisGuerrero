import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutnavbarComponent } from './layoutnavbar.component';

describe('LayoutnavbarComponent', () => {
  let component: LayoutnavbarComponent;
  let fixture: ComponentFixture<LayoutnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
