import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeammateDialogComponent } from './add-teammate-dialog.component';

describe('AddTeammateDialogComponent', () => {
  let component: AddTeammateDialogComponent;
  let fixture: ComponentFixture<AddTeammateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeammateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeammateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
