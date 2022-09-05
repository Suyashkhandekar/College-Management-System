import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MefnoticeComponent } from './mefnotice.component';

describe('MefnoticeComponent', () => {
  let component: MefnoticeComponent;
  let fixture: ComponentFixture<MefnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MefnoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MefnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
