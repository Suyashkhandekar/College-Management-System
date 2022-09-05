import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EesdashboardComponent } from './eesdashboard.component';

describe('EesdashboardComponent', () => {
  let component: EesdashboardComponent;
  let fixture: ComponentFixture<EesdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EesdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EesdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
