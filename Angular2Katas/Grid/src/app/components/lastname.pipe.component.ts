/*
    Filters the passed in collection on the firstName field

    Looks for searchText argument.

    http://www.advancesharp.com/blog/1211/angular-2-search-and-sort-with-ngfor-repeater-with-example
*/

 import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchText'})
export class LastNamePipe implements PipeTransform {
    transform(records: any, searchText: any): any {
        if (searchText == null) {
            return records;
        }
        return records.filter(function(e){
            return e.firstName.toLowerCase().indexOf(searchText) > -1;
        });
    }
}
