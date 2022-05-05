import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilRechercheComponent } from './accueil-recherche.component';

describe('AccueilRechercheComponent', () => {
  let component: AccueilRechercheComponent;
  let fixture: ComponentFixture<AccueilRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilRechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
