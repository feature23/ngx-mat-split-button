# ngx-mat-split-button

A split button component for Angular Material.

## Installation

```bash
npm i --save @feature23/ngx-mat-split-button
```

## Usage

Import `NgxMatSplitButton` and `NgxMatSplitButtonPrimaryAction` into either your standalone component's `imports` array, or the module in which it will be used.

You likely will also need to import `MatMenuItem` from `@angular/material/menu`, if you want to use the attached menu as intended.

Example:
```html
<ngx-mat-split-button color="primary" buttonStyle="raised" (primaryClick)="primaryClick()">
    <ng-template ngx-mat-split-primary-action>
        Primary action
    </ng-template>
    <button mat-menu-item (click)="secondaryClick()">Item 1</button>
    <button mat-menu-item (click)="secondaryClick()">Item 2</button>
    <button mat-menu-item (click)="secondaryClick()">Item 3</button>
</ngx-mat-split-button>
```

The `ng-template` with the `ngx-mat-split-primary-action` directive is required to provide the inner content for the primary action button (the button to the left of the dropdown arrow).
Anything else inside the `ngx-mat-split-button` component will be rendered in the dropdown menu, which internally is just a `mat-menu` with `xPosition="before"`.

## Inputs

The `ngx-mat-split-button` component has the following inputs to customize its appearance and behavior:

| Input | Type | Description |
| --- | --- | --- |
| `color` | `'primary' \| 'accent' \| 'warn' \| undefined` | (Optional; default `undefined`) The color of the primary action button. (Material 2 themes only.) |
| `buttonStyle` | `'raised' \| 'stroked' \| 'flat' \| 'basic'` | (Optional; default `'basic'`) The style of the primary action button. These map to the equivalent [Angular Material Button directives](https://material.angular.io/components/button/overview), with `raised` being slightly different in the DOM than the others due to needing a unified shadow. (`raised` style uses `mat-flat-button` internally with a `box-shadow`.) |

## Events

The following output events are available to support interactivity:

| Output | Event/Argument Type | Description |
| --- | --- | --- |
| `primaryClick` | `MouseEvent` | Emitted when the primary action button is clicked. |

To handle clicks on the secondary action buttons, you can simply add `(click)="handler()"` to the buttons you provide inside the `ngx-mat-split-button` component.
