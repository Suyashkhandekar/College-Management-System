import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EefacultypanelComponent } from './eefacultypanel.component';

describe('EefacultypanelComponent', () => {
  let component: EefacultypanelComponent;
  let fixture: ComponentFixture<EefacultypanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EefacultypanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EefacultypanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
