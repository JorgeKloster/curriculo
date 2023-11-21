import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciasComponent } from './experiencias.component';

describe('ExperienciasComponent', () => {
  let component: ExperienciasComponent;
  let fixture: ComponentFixture<ExperienciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienciasComponent]
    });
    fixture = TestBed.createComponent(ExperienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
