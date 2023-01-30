import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiceHistoryCardComponent } from './home-service-history-card.component';

describe('HomeServiceHistoryCardComponent', () => {
  let component: HomeServiceHistoryCardComponent;
  let fixture: ComponentFixture<HomeServiceHistoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServiceHistoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServiceHistoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
