import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEComponent } from './ee.component';

describe('EEComponent', () => {
  let component: EEComponent;
  let fixture: ComponentFixture<EEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
