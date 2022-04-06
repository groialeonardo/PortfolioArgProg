import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnshowexpComponent } from './btnshowexp.component';

describe('BtnshowexpComponent', () => {
  let component: BtnshowexpComponent;
  let fixture: ComponentFixture<BtnshowexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnshowexpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnshowexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
