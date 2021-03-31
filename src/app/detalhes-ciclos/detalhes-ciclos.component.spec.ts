import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCiclosComponent } from './detalhes-ciclos.component';

describe('DetalhesCiclosComponent', () => {
  let component: DetalhesCiclosComponent;
  let fixture: ComponentFixture<DetalhesCiclosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesCiclosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesCiclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
