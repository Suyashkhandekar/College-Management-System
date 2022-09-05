import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EefdashboardComponent } from './eefdashboard.component';

describe('EefdashboardComponent', () => {
  let component: EefdashboardComponent;
  let fixture: ComponentFixture<EefdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EefdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EefdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
