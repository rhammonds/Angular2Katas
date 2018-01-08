import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-customer',
    template: require('./customer.component.html')
})
export class CustomerComponent {
    public firstName: string = '';
    public lastName: string = '';

    public saveData() {
        console.log(this.firstName + ' ' + this.lastName);
    }
}
