import { CommonModule } from '@angular/common';
import { Component, contentChild, inject, input, output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgxMatSplitButtonService } from './ngx-mat-split-button.service';
import { NgxMatSplitPrimaryAction } from './ngx-mat-split-primary-action.directive';

@Component({
    selector: 'ngx-mat-split-button',
    standalone: true,
    imports: [
        CommonModule,
        MatButton,
        MatIcon,
        MatMenuModule,
    ],
    // NOTE: the repetitive code here is required because it doesn't appear that you can conditionally add directives like `mat-button` vs `mat-flat-button`.
    template: `
    @if (buttonStyle() === 'basic') {
        <button mat-button [color]="color()" (click)="primaryClick.emit()"
            class="ngx-mat-split-button-primary ngx-mat-split-button-basic">
            <ng-container [ngTemplateOutlet]="primaryAction().templateRef" />
        </button>
        <button mat-button [color]="color()" [matMenuTriggerFor]="menu"
            class="ngx-mat-split-button-trigger"
            aria-label="Toggle dropdown">
            <mat-icon svgIcon="ngx-mat-split-arrow-down-icon" aria-label="Down arrow icon" />
        </button>
    } @else if (buttonStyle() === 'raised') {
        <div class="ngx-mat-split-button-raised-wrapper">
            <button mat-flat-button [color]="color()" (click)="primaryClick.emit()"
                class="ngx-mat-split-button-primary ngx-mat-split-button-raised">
                <ng-container [ngTemplateOutlet]="primaryAction().templateRef" />
            </button>
            <button mat-flat-button [color]="color()" [matMenuTriggerFor]="menu"
                class="ngx-mat-split-button-trigger"
                aria-label="Toggle dropdown">
                <mat-icon svgIcon="ngx-mat-split-arrow-down-icon" aria-label="Down arrow icon" />
            </button>
        </div>
    } @else if (buttonStyle() === 'stroked') {
        <button mat-stroked-button [color]="color()" (click)="primaryClick.emit()"
            class="ngx-mat-split-button-primary ngx-mat-split-button-stroked">
            <ng-container [ngTemplateOutlet]="primaryAction().templateRef" />
        </button>
        <button mat-stroked-button [color]="color()" [matMenuTriggerFor]="menu"
            class="ngx-mat-split-button-trigger"
            aria-label="Toggle dropdown">
            <mat-icon svgIcon="ngx-mat-split-arrow-down-icon" aria-label="Down arrow icon" />
        </button>
    } @else if (buttonStyle() === 'flat') {
        <button mat-flat-button [color]="color()" (click)="primaryClick.emit()"
            class="ngx-mat-split-button-primary ngx-mat-split-button-flat">
            <ng-container [ngTemplateOutlet]="primaryAction().templateRef" />
        </button>
        <button mat-flat-button [color]="color()" [matMenuTriggerFor]="menu"
            class="ngx-mat-split-button-trigger"
            aria-label="Toggle dropdown">
            <mat-icon svgIcon="ngx-mat-split-arrow-down-icon" aria-label="Down arrow icon" />
        </button>
    }
    <mat-menu #menu="matMenu" xPosition="before">
        <ng-content />
    </mat-menu>
  `,
    styles: `
    .ngx-mat-split-button-primary {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .ngx-mat-split-button-trigger {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left-width: 0;
        min-width: 3rem;

        mat-icon {
            --mat-text-button-icon-spacing: 0;
            --mat-filled-button-icon-spacing: 0;
            --mat-protected-button-icon-spacing: 0;
            --mat-outlined-button-icon-spacing: 0;
        }
    }
    .ngx-mat-split-button-raised-wrapper {
        display: inline-block;
        border-radius: var(--mdc-filled-button-container-shape, var(--mat-app-corner-full));
        box-shadow: var(--mdc-protected-button-container-elevation-shadow, var(--mat-app-level1));
    }
    .ngx-mat-split-button-flat {
        mat-icon svg {
            fill: var(--mdc-filled-button-label-text-color, var(--mat-app-on-primary));
        }
    }
    `
})
export class NgxMatSplitButton {
    readonly color = input<string>();
    readonly buttonStyle = input<'basic' | 'raised' | 'stroked' | 'flat'>('basic');

    readonly primaryClick = output();

    readonly primaryAction = contentChild.required(NgxMatSplitPrimaryAction);

    constructor() {
        const service = inject(NgxMatSplitButtonService);
        service.initialize();
    }
}
