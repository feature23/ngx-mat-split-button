import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NgxMatSplitButton } from './ngx-mat-split-button.component';
import { NgxMatSplitPrimaryAction } from './ngx-mat-split-primary-action.directive';

@Component({
  imports: [NgxMatSplitButton, NgxMatSplitPrimaryAction],
  template: `
    <ngx-mat-split-button>
      <ng-template ngx-mat-split-primary-action>Default action</ng-template>
    </ngx-mat-split-button>
  `,
})
class TestHost {}

describe('NgxMatSplitButton', () => {
  let component: NgxMatSplitButton;
  let fixture: ComponentFixture<TestHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestHost);
    component = fixture.debugElement.query(By.directive(NgxMatSplitButton)).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
