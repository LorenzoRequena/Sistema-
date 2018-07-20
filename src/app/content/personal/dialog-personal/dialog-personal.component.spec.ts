import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPersonalComponent } from './dialog-personal.component';

describe('DialogPersonalComponent', () => {
  let component: DialogPersonalComponent;
  let fixture: ComponentFixture<DialogPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
