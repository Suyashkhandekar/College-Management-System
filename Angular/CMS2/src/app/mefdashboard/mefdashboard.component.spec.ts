import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MefdashboardComponent } from './mefdashboard.component';

describe('MefdashboardComponent', () => {
  let component: MefdashboardComponent;
  let fixture: ComponentFixture<MefdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MefdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MefdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
