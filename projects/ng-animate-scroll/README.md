# ng-animate-scroll [![npm version](https://img.shields.io/npm/v/ng-animate-scroll.svg)](https://www.npmjs.com/package/ng-animate-scroll)
Customisable angular module to animate scroll event to an element. Compatible with Angular 2.x onwards

## Installation

First you need to install the npm module:

```sh
npm i ng-animate-scroll --save
```

## Usage

### 1. Import the `AnimateScrollModule`:

Finally, you can use ng-animate-scroll in your Angular project. You have to import `AnimateScrollModule` in the root NgModule of your application or the shared module depending on how you are architecting your application.

##### AppModule

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AnimateScrollModule } from 'ng-animate-scroll';

@NgModule({
    imports: [
        BrowserModule,
        AnimateScrollModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

##### SharedModule

If you use a [`SharedModule`](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#shared-modules) that you import in multiple other feature modules,
you can export the `AnimateScrollModule` to make sure you don't have to import it in every module.

```ts
@NgModule({
    exports: [
        CommonModule,
        AnimateScrollModule
    ]
})
export class SharedModule { }
```

### 2. Methods:
#### AnimateScrollService
- `scrollToElement(elementID: string, duration: number = 750)`: Find an element using its ID and scrolls to it smoothly. Duration of the animation is optional and has default of 750 ms.

### 3. Example

```ts
import { Component } from '@angular/core';
import { AnimateScrollService } from 'ng-animate-scroll';

@Component({
    selector: 'app',
    template: `
        <header id="header"></header>
        <button (click)="navigateToHeader()">scroll to header</div>
        <button (click)="navigateToHeader(2000)">scroll to header slowly</div>
    `
})
export class AppComponent {

    constructor(private animateScrollService: AnimateScrollService) {
    }

    navigateToHeader(duration?:number) {
        this.animateScrollService.scrollToItem('header', duration)
    }
}
```