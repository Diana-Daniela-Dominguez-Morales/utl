import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresarioComponent } from './empresario.component';

describe('AdministrativoComponent', () => {
  let component: EmpresarioComponent;
  let fixture: ComponentFixture<EmpresarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresarioComponent]
    });
    fixture = TestBed.createComponent(EmpresarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
