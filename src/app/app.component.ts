import { Component } from '@angular/core';

import '../assets/css/app.css';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    public title = 'rock-paper-scissors';
    public appVersion = 'v0.0.1';
 }
