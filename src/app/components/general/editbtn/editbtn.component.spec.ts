import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbtnComponent } from './editbtn.component';

describe('EditbtnComponent', () => {
  let component: EditbtnComponent;
  let fixture: ComponentFixture<EditbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
