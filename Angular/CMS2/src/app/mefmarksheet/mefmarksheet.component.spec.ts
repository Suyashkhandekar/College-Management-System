import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MefmarksheetComponent } from './mefmarksheet.component';

describe('MefmarksheetComponent', () => {
  let component: MefmarksheetComponent;
  let fixture: ComponentFixture<MefmarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MefmarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MefmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
