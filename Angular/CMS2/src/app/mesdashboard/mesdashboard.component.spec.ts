import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesdashboardComponent } from './mesdashboard.component';

describe('MesdashboardComponent', () => {
  let component: MesdashboardComponent;
  let fixture: ComponentFixture<MesdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
