import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EesnoticeComponent } from './eesnotice.component';

describe('EesnoticeComponent', () => {
  let component: EesnoticeComponent;
  let fixture: ComponentFixture<EesnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EesnoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EesnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
