import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CefacultiesComponent } from './cefaculties.component';

describe('CefacultiesComponent', () => {
  let component: CefacultiesComponent;
  let fixture: ComponentFixture<CefacultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CefacultiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CefacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
