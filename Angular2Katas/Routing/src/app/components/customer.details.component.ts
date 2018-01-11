import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer.details.component.html'
})
export class CustomerDetailsComponent {
    constructor(
        private router: Router,
    ) {}
    viewCustomer()    {
        this.router.navigate(['customer']);
    }
}
