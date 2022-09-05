import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPComponent } from './tp.component';

describe('TPComponent', () => {
  let component: TPComponent;
  let fixture: ComponentFixture<TPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
