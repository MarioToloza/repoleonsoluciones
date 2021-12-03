import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFormcitaComponent } from './crear-formcita.component';

describe('CrearFormcitaComponent', () => {
  let component: CrearFormcitaComponent;
  let fixture: ComponentFixture<CrearFormcitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFormcitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFormcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
