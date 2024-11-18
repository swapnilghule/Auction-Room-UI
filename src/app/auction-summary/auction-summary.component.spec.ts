import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionSummaryComponent } from './auction-summary.component';

describe('AuctionSummaryComponent', () => {
  let component: AuctionSummaryComponent;
  let fixture: ComponentFixture<AuctionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuctionSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
