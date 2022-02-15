import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CentroControleComponent } from './centro-controle.component';

describe('CentroControleComponent', () => {
  let component: CentroControleComponent;
  let fixture: ComponentFixture<CentroControleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroControleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
