import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CestudentpanelComponent } from './cestudentpanel.component';

describe('CestudentpanelComponent', () => {
  let component: CestudentpanelComponent;
  let fixture: ComponentFixture<CestudentpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CestudentpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CestudentpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
