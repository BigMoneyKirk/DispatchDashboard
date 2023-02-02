import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAVendorPageComponent } from './select-a-vendor-page.component';

describe('SelectAVendorPageComponent', () => {
  let component: SelectAVendorPageComponent;
  let fixture: ComponentFixture<SelectAVendorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAVendorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAVendorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
