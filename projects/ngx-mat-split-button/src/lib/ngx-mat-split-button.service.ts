import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const ARROW_DOWN_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>
`;

@Injectable({
    providedIn: 'root'
})
export class NgxMatSplitButtonService {

    constructor() {
        const iconRegistry = inject(MatIconRegistry);
        const sanitizer = inject(DomSanitizer);
        iconRegistry.addSvgIconLiteral('ngx-mat-split-arrow-down-icon', sanitizer.bypassSecurityTrustHtml(ARROW_DOWN_ICON));
    }

    initialize() {
        // noop, ensure service is injected and constructor run
    }
}
