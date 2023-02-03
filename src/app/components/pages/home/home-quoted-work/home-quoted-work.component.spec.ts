import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQuotedWorkComponent } from './home-quoted-work.component';

describe('HomeQuotedWorkComponent', () => {
  let component: HomeQuotedWorkComponent;
  let fixture: ComponentFixture<HomeQuotedWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeQuotedWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeQuotedWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
