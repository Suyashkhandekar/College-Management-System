import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CefnoticeComponent } from './cefnotice.component';

describe('CefnoticeComponent', () => {
  let component: CefnoticeComponent;
  let fixture: ComponentFixture<CefnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CefnoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CefnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
