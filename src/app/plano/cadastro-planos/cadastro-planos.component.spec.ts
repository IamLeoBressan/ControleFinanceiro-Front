import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CadastroPlanosComponent } from './cadastro-planos.component';

describe('CadastroPlanosComponent', () => {
  let component: CadastroPlanosComponent;
  let fixture: ComponentFixture<CadastroPlanosComponent>;

  beforeEach(waitForAsync(() => {
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
