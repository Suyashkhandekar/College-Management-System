import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampSelComponent } from './camp-sel.component';

describe('CampSelComponent', () => {
  let component: CampSelComponent;
  let fixture: ComponentFixture<CampSelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampSelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
