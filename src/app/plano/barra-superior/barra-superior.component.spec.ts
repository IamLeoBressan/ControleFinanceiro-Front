import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BarraSuperiorComponent } from './barra-superior.component';

describe('BarraSuperiorComponent', () => {
  let component: BarraSuperiorComponent;
  let fixture: ComponentFixture<BarraSuperiorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraSuperiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
