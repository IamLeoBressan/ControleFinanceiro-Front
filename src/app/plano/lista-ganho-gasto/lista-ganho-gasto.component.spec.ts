import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGanhoGastoComponent } from './lista-ganho-gasto.component';

describe('GanhoGastoComponent', () => {
  let component: ListaGanhoGastoComponent;
  let fixture: ComponentFixture<ListaGanhoGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGanhoGastoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGanhoGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
