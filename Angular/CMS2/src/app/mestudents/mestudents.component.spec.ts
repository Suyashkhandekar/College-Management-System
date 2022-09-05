import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MestudentsComponent } from './mestudents.component';

describe('MestudentsComponent', () => {
  let component: MestudentsComponent;
  let fixture: ComponentFixture<MestudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MestudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MestudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
