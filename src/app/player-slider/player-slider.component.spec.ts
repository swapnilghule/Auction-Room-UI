import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSliderComponent } from './player-slider.component';

describe('PlayerSliderComponent', () => {
  let component: PlayerSliderComponent;
  let fixture: ComponentFixture<PlayerSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
