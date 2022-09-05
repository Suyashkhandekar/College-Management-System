import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesnoticeComponent } from './mesnotice.component';

describe('MesnoticeComponent', () => {
  let component: MesnoticeComponent;
  let fixture: ComponentFixture<MesnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesnoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
