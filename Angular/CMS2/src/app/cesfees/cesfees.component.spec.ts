import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CesfeesComponent } from './cesfees.component';

describe('CesfeesComponent', () => {
  let component: CesfeesComponent;
  let fixture: ComponentFixture<CesfeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CesfeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CesfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
