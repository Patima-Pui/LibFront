import { Component } from '@angular/core';

@Component({
    selector: 'app-main-layout',
    template: `
    <app-homepage></app-homepage>
    <router-outlet></router-outlet>
    `
})
export class MainLayoutComponent { }
