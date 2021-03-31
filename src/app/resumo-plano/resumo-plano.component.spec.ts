import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoPlanoComponent } from './resumo-plano.component';

describe('ResumoPlanoComponent', () => {
  let component: ResumoPlanoComponent;
  let fixture: ComponentFixture<ResumoPlanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumoPlanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
