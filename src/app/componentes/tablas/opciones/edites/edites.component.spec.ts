import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditesComponent } from './edites.component';

describe('EditesComponent', () => {
  let component: EditesComponent;
  let fixture: ComponentFixture<EditesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
