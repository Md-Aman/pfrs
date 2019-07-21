import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIndividualItemComponent } from './admin-individual-item.component';

describe('AdminIndividualItemComponent', () => {
  let component: AdminIndividualItemComponent;
  let fixture: ComponentFixture<AdminIndividualItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminIndividualItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIndividualItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
