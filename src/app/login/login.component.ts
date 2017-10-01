import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

import { NGXLogger } from 'ngx-logger';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html',
    providers: [NGXLogger]
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private logger: NGXLogger) {
         }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        this.logger.debug('Logout user')

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';        
        this.logger.debug('Change returnUrl')
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.logger.debug('Router navigate to ' + this.returnUrl);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.logger.debug('Error :' + error);
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
