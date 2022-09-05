import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstudentsComponent } from './astudents.component';

describe('AstudentsComponent', () => {
  let component: AstudentsComponent;
  let fixture: ComponentFixture<AstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
