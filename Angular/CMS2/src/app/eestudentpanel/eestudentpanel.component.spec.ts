import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EestudentpanelComponent } from './eestudentpanel.component';

describe('EestudentpanelComponent', () => {
  let component: EestudentpanelComponent;
  let fixture: ComponentFixture<EestudentpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EestudentpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EestudentpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
