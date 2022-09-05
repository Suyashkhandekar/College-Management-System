import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EestudentsComponent } from './eestudents.component';

describe('EestudentsComponent', () => {
  let component: EestudentsComponent;
  let fixture: ComponentFixture<EestudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EestudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EestudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
