import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatSplitButton } from './ngx-mat-split-button.component';

describe('NgxMatSplitButton', () => {
  let component: NgxMatSplitButton;
  let fixture: ComponentFixture<NgxMatSplitButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMatSplitButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMatSplitButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
