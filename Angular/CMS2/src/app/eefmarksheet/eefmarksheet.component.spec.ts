import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EefmarksheetComponent } from './eefmarksheet.component';

describe('EefmarksheetComponent', () => {
  let component: EefmarksheetComponent;
  let fixture: ComponentFixture<EefmarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EefmarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EefmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
