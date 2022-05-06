import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditauComponent } from './editau.component';

describe('EditauComponent', () => {
  let component: EditauComponent;
  let fixture: ComponentFixture<EditauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
