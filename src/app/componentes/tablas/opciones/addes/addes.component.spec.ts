import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddesComponent } from './addes.component';

describe('AddesComponent', () => {
  let component: AddesComponent;
  let fixture: ComponentFixture<AddesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
