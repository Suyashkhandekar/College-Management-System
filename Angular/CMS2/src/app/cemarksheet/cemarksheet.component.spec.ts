import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CemarksheetComponent } from './cemarksheet.component';

describe('CemarksheetComponent', () => {
  let component: CemarksheetComponent;
  let fixture: ComponentFixture<CemarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CemarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CemarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
