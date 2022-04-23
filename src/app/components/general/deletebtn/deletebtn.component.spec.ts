import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebtnComponent } from './deletebtn.component';

describe('DeletebtnComponent', () => {
  let component: DeletebtnComponent;
  let fixture: ComponentFixture<DeletebtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletebtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletebtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
