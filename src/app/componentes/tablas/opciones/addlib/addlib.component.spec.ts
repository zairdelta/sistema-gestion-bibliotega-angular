import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlibComponent } from './addlib.component';

describe('AddlibComponent', () => {
  let component: AddlibComponent;
  let fixture: ComponentFixture<AddlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
