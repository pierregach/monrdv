import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPraticienComponent } from './info-praticien.component';

describe('InfoPraticienComponent', () => {
  let component: InfoPraticienComponent;
  let fixture: ComponentFixture<InfoPraticienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPraticienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
