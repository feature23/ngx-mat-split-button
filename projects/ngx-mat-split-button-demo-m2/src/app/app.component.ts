import { Component } from '@angular/core';
import { NgxMatSplitButton, NgxMatSplitPrimaryAction } from '../../../ngx-mat-split-button/src/public-api';
import { MatMenuItem } from '@angular/material/menu';

@Component({
    selector: 'app-root',
    imports: [
        NgxMatSplitButton,
        NgxMatSplitPrimaryAction,
        MatMenuItem,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'ngx-mat-split-button demo (M2)';

    primaryClick() {
        alert('Primary action clicked');
    }

    secondaryClick() {
        alert('Secondary action clicked');
    }
}
