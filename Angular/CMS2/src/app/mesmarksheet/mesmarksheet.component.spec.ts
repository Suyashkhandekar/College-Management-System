import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesmarksheetComponent } from './mesmarksheet.component';

describe('MesmarksheetComponent', () => {
  let component: MesmarksheetComponent;
  let fixture: ComponentFixture<MesmarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesmarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
