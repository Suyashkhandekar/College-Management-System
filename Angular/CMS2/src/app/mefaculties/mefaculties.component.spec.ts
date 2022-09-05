import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MefacultiesComponent } from './mefaculties.component';

describe('MefacultiesComponent', () => {
  let component: MefacultiesComponent;
  let fixture: ComponentFixture<MefacultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MefacultiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MefacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
