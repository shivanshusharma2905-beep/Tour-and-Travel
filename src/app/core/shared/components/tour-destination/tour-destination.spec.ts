import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDestination } from './tour-destination';

describe('TourDestination', () => {
  let component: TourDestination;
  let fixture: ComponentFixture<TourDestination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourDestination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourDestination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
