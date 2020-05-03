import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlanosComponent } from './lista-planos.component';

describe('ListaPlanosComponent', () => {
  let component: ListaPlanosComponent;
  let fixture: ComponentFixture<ListaPlanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPlanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
