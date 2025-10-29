import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPackage } from './tour-package';

describe('TourPackage', () => {
  let component: TourPackage;
  let fixture: ComponentFixture<TourPackage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourPackage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourPackage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
