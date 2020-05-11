import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPlanosComponent } from './cadastro-planos.component';

describe('CadastroPlanosComponent', () => {
  let component: CadastroPlanosComponent;
  let fixture: ComponentFixture<CadastroPlanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPlanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPlanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
