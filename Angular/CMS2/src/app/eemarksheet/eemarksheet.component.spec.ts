import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EemarksheetComponent } from './eemarksheet.component';

describe('EemarksheetComponent', () => {
  let component: EemarksheetComponent;
  let fixture: ComponentFixture<EemarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EemarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EemarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
