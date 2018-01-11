import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent {
    constructor(
        private router: Router,
    ) {}
    viewHome()    {
        this.router.navigate(['home']);
    }
    viewCustomerDetails()    {
        this.router.navigate(['customerdetails']);
    }
}
