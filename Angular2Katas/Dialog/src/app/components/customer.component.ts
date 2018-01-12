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
    public customerName = 'George Washington';
    public customerAddress = '123 Apple Street, Atlanta, GA 12345';

    viewHome()    {
        this.router.navigate(['home']);
    }
}
