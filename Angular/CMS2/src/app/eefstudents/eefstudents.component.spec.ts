import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EefstudentsComponent } from './eefstudents.component';

describe('EefstudentsComponent', () => {
  let component: EefstudentsComponent;
  let fixture: ComponentFixture<EefstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EefstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EefstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
