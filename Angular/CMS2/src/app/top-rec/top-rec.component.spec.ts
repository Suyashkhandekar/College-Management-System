import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRecComponent } from './top-rec.component';

describe('TopRecComponent', () => {
  let component: TopRecComponent;
  let fixture: ComponentFixture<TopRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
