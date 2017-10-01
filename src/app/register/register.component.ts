import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

import { NGXLogger } from 'ngx-logger';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html',
    providers: [NGXLogger]
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private logger: NGXLogger) { }

    register() {
        this.loading = true;
        this.logger.debug('Register user : ' + this.model)
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.logger.debug('Succes creating user navigate to login')
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.logger.debug('Error creating user : ' + error)
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
