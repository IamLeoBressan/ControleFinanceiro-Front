import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanhoGastoComponent } from './ganho-gasto.component';

describe('GanhoGastoComponent', () => {
  let component: GanhoGastoComponent;
  let fixture: ComponentFixture<GanhoGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanhoGastoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanhoGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
