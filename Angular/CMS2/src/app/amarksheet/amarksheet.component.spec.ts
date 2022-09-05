import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmarksheetComponent } from './amarksheet.component';

describe('AmarksheetComponent', () => {
  let component: AmarksheetComponent;
  let fixture: ComponentFixture<AmarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
