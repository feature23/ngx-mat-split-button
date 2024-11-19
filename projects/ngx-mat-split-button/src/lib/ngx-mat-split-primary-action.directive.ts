import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[ngx-mat-split-primary-action]',
    standalone: true,
})
export class NgxMatSplitPrimaryAction {
    constructor(public templateRef: TemplateRef<unknown>) {
    }
 }
