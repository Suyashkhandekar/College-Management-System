import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstaffComponent } from './astaff.component';

describe('AstaffComponent', () => {
  let component: AstaffComponent;
  let fixture: ComponentFixture<AstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
