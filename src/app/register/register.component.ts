import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import { User } from '../_models/user';

import { NGXLogger } from 'ngx-logger';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html',
    providers: [NGXLogger]
})

export class RegisterComponent {
    user: User = {firstName:null,id:null,lastName:null,passWord:null,userName:null};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private logger: NGXLogger) { }

    register() {
        this.loading = true;
        this.logger.debug('Register user : ' + this.user)
        this.userService.create(this.user)
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
