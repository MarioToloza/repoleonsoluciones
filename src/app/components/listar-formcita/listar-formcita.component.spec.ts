import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFormcitaComponent } from './listar-formcita.component';

describe('ListarFormcitaComponent', () => {
  let component: ListarFormcitaComponent;
  let fixture: ComponentFixture<ListarFormcitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFormcitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFormcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
