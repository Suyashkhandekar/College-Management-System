import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultySignUpComponent } from './faculty-sign-up.component';

describe('FacultySignUpComponent', () => {
  let component: FacultySignUpComponent;
  let fixture: ComponentFixture<FacultySignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultySignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultySignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
