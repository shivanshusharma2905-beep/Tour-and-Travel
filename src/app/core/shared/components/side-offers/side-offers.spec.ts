import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideOffers } from './side-offers';

describe('SideOffers', () => {
  let component: SideOffers;
  let fixture: ComponentFixture<SideOffers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideOffers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideOffers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
