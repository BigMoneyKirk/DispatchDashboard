import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericInformationCardComponent } from './generic-information-card.component';

describe('GenericInformationCardComponent', () => {
  let component: GenericInformationCardComponent;
  let fixture: ComponentFixture<GenericInformationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericInformationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericInformationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
