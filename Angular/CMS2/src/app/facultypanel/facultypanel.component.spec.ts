import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultypanelComponent } from './facultypanel.component';

describe('FacultypanelComponent', () => {
  let component: FacultypanelComponent;
  let fixture: ComponentFixture<FacultypanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultypanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultypanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
