import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcourseComponent } from './acourse.component';

describe('AcourseComponent', () => {
  let component: AcourseComponent;
  let fixture: ComponentFixture<AcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
