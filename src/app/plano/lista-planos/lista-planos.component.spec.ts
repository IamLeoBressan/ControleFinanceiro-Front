import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListaPlanosComponent } from './lista-ciclos.component';

describe('ListaPlanosComponent', () => {
  let component: ListaPlanosComponent;
  let fixture: ComponentFixture<ListaPlanosComponent>;

  beforeEach(waitForAsync(() => {
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
