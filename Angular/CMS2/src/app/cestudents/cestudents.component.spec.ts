import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CestudentsComponent } from './cestudents.component';

describe('CestudentsComponent', () => {
  let component: CestudentsComponent;
  let fixture: ComponentFixture<CestudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CestudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CestudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
