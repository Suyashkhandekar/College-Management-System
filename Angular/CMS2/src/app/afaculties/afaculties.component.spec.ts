import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfacultiesComponent } from './afaculties.component';

describe('AfacultiesComponent', () => {
  let component: AfacultiesComponent;
  let fixture: ComponentFixture<AfacultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfacultiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
