import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MefstudentsComponent } from './mefstudents.component';

describe('MefstudentsComponent', () => {
  let component: MefstudentsComponent;
  let fixture: ComponentFixture<MefstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MefstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MefstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
