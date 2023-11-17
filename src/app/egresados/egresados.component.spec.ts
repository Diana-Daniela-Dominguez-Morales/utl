import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresadosComponent } from './egresados.component';

describe('EgresadosComponent', () => {
  let component: EgresadosComponent;
  let fixture: ComponentFixture<EgresadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EgresadosComponent]
    });
    fixture = TestBed.createComponent(EgresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
