import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EefnoticeComponent } from './eefnotice.component';

describe('EefnoticeComponent', () => {
  let component: EefnoticeComponent;
  let fixture: ComponentFixture<EefnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EefnoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EefnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
