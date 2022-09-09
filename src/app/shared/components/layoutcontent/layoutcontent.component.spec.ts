import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutcontentComponent } from './layoutcontent.component';

describe('LayoutcontentComponent', () => {
  let component: LayoutcontentComponent;
  let fixture: ComponentFixture<LayoutcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
