import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CesdashboardComponent } from './cesdashboard.component';

describe('CesdashboardComponent', () => {
  let component: CesdashboardComponent;
  let fixture: ComponentFixture<CesdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CesdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CesdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
