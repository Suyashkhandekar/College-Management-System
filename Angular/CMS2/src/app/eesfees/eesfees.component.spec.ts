import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EesfeesComponent } from './eesfees.component';

describe('EesfeesComponent', () => {
  let component: EesfeesComponent;
  let fixture: ComponentFixture<EesfeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EesfeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EesfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
