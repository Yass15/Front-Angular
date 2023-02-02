import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectEtdComponent } from './affect-etd.component';

describe('AffectEtdComponent', () => {
  let component: AffectEtdComponent;
  let fixture: ComponentFixture<AffectEtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectEtdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectEtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
