import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListaPrevisaoComponent } from './lista-previsao.component';

describe('ListaPrevisaoComponent', () => {
  let component: ListaPrevisaoComponent;
  let fixture: ComponentFixture<ListaPrevisaoComponent>;

  beforeEach(waitForAsync(() => {
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
