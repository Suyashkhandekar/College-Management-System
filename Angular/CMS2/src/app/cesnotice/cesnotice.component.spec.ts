import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CesnoticeComponent } from './cesnotice.component';

describe('CesnoticeComponent', () => {
  let component: CesnoticeComponent;
  let fixture: ComponentFixture<CesnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CesnoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CesnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
