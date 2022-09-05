import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemarksheetComponent } from './memarksheet.component';

describe('MemarksheetComponent', () => {
  let component: MemarksheetComponent;
  let fixture: ComponentFixture<MemarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
