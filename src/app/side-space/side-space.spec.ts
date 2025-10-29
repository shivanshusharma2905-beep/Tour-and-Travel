import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSpace } from './side-space';

describe('SideSpace', () => {
  let component: SideSpace;
  let fixture: ComponentFixture<SideSpace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideSpace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideSpace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
