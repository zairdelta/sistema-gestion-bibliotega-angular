import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlibauComponent } from './editlibau.component';

describe('EditlibauComponent', () => {
  let component: EditlibauComponent;
  let fixture: ComponentFixture<EditlibauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditlibauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlibauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
