import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImportantNotesComponent } from './home-important-notes.component';

describe('HomeImportantNotesComponent', () => {
  let component: HomeImportantNotesComponent;
  let fixture: ComponentFixture<HomeImportantNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeImportantNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeImportantNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
