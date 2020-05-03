import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPrevisaoComponent } from './lista-previsao.component';

describe('ListaPrevisaoComponent', () => {
  let component: ListaPrevisaoComponent;
  let fixture: ComponentFixture<ListaPrevisaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPrevisaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPrevisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
