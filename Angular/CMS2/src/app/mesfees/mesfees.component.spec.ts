import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesfeesComponent } from './mesfees.component';

describe('MesfeesComponent', () => {
  let component: MesfeesComponent;
  let fixture: ComponentFixture<MesfeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesfeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
