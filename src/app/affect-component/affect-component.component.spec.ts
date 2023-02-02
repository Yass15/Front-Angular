import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectComponentComponent } from './affect-component.component';

describe('AffectComponentComponent', () => {
  let component: AffectComponentComponent;
  let fixture: ComponentFixture<AffectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
