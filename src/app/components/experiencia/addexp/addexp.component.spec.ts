import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexpComponent } from './addexp.component';

describe('AddexpComponent', () => {
  let component: AddexpComponent;
  let fixture: ComponentFixture<AddexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddexpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
