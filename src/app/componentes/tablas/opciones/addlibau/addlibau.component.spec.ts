import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlibauComponent } from './addlibau.component';

describe('AddlibauComponent', () => {
  let component: AddlibauComponent;
  let fixture: ComponentFixture<AddlibauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlibauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlibauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
