import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlibComponent } from './editlib.component';

describe('EditlibComponent', () => {
  let component: EditlibComponent;
  let fixture: ComponentFixture<EditlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditlibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
