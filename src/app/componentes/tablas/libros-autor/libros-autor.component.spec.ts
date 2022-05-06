import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosAutorComponent } from './libros-autor.component';

describe('LibrosAutorComponent', () => {
  let component: LibrosAutorComponent;
  let fixture: ComponentFixture<LibrosAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
