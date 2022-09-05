import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEComponent } from './me.component';

describe('MEComponent', () => {
  let component: MEComponent;
  let fixture: ComponentFixture<MEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
