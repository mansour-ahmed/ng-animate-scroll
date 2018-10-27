# ng-animate-scroll [![npm version](https://img.shields.io/npm/v/ng-animate-scroll.svg)](https://www.npmjs.com/package/ng-animate-scroll)
Customisable angular module to animate scroll event to an element. Compatible with Angular 2.x onwards

## Installation

First you need to install the npm module:

```sh
npm i ng-animate-scroll --save
```

## Usage

### 1. Methods:
#### AnimateScrollService
- `scrollToElement(elementID: string, duration: number = 750)`: Find an element using its ID and scrolls to it smoothly. Duration of the animation is optional and has default of 750 ms.

### 2. Example

```ts
import { Component } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
    selector: 'app',
    template: `
        <header id="header"></header>
        <button (click)="navigateToHeader()">scroll to header</div>
        <button (click)="navigateToHeader(2000)">scroll to header slowly</div>
    `
})
export class AppComponent {

    constructor(private animateScrollService: NgAnimateScrollService) {
    }

    navigateToHeader(duration?:number) {
        this.animateScrollService.scrollToElement('header', duration)
    }
}
```