import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CefdashboardComponent } from './cefdashboard.component';

describe('CefdashboardComponent', () => {
  let component: CefdashboardComponent;
  let fixture: ComponentFixture<CefdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CefdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CefdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
