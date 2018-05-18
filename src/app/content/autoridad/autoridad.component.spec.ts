import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoridadComponent } from './autoridad.component';

describe('AutoridadComponent', () => {
  let component: AutoridadComponent;
  let fixture: ComponentFixture<AutoridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
