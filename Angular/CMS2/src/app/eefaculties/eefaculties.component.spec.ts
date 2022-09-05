import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EefacultiesComponent } from './eefaculties.component';

describe('EefacultiesComponent', () => {
  let component: EefacultiesComponent;
  let fixture: ComponentFixture<EefacultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EefacultiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EefacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
