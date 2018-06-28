import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMovimientosComponent } from './dialog-movimientos.component';

describe('DialogMovimientosComponent', () => {
  let component: DialogMovimientosComponent;
  let fixture: ComponentFixture<DialogMovimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogMovimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
