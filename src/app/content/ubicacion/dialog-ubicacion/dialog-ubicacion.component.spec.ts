import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUbicacionComponent } from './dialog-ubicacion.component';

describe('DialogUbicacionComponent', () => {
  let component: DialogUbicacionComponent;
  let fixture: ComponentFixture<DialogUbicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUbicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
