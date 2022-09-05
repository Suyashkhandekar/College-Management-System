import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AattendenceComponent } from './aattendence.component';

describe('AattendenceComponent', () => {
  let component: AattendenceComponent;
  let fixture: ComponentFixture<AattendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AattendenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AattendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
