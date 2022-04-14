import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftrendsComponent } from './giftrends.component';

describe('GiftrendsComponent', () => {
  let component: GiftrendsComponent;
  let fixture: ComponentFixture<GiftrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
