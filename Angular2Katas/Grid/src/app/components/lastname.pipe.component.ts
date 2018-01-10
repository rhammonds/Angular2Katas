
 import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'lastName'})
export class LastNamePipe implements PipeTransform {
    transform(lastNames: any, searchText: any): any {
        if (searchText == null) {return lastNames; }

    return lastNames.filter(function(lastName){
        return lastName.lastName.toLowerCase().indexOf(searchText) > -1;
    });
    }
}
