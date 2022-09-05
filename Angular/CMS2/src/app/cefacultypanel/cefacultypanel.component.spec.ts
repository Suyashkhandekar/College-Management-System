import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CefacultypanelComponent } from './cefacultypanel.component';

describe('CefacultypanelComponent', () => {
  let component: CefacultypanelComponent;
  let fixture: ComponentFixture<CefacultypanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CefacultypanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CefacultypanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
