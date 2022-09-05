import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CefstudentsComponent } from './cefstudents.component';

describe('CefstudentsComponent', () => {
  let component: CefstudentsComponent;
  let fixture: ComponentFixture<CefstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CefstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CefstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
