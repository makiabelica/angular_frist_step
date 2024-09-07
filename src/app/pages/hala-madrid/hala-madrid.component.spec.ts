import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalaMadridComponent } from './hala-madrid.component';

describe('HalaMadridComponent', () => {
  let component: HalaMadridComponent;
  let fixture: ComponentFixture<HalaMadridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HalaMadridComponent]
    });
    fixture = TestBed.createComponent(HalaMadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
