import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierCreneauComponent } from './calendrier-creneau.component';

describe('CalendrierCreneauComponent', () => {
  let component: CalendrierCreneauComponent;
  let fixture: ComponentFixture<CalendrierCreneauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendrierCreneauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrierCreneauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
