import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBartComponent } from './nav-bart.component';

describe('NavBartComponent', () => {
  let component: NavBartComponent;
  let fixture: ComponentFixture<NavBartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
