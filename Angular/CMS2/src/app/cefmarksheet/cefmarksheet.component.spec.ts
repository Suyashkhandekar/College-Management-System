import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CefmarksheetComponent } from './cefmarksheet.component';

describe('CefmarksheetComponent', () => {
  let component: CefmarksheetComponent;
  let fixture: ComponentFixture<CefmarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CefmarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CefmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
