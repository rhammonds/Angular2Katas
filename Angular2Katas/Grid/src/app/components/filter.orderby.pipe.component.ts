/*
    Orders the passed in collection by the passed in values.

    Looks for arguments property, startPerson, endPerson and direction.

    Also filters the passed in collection on the firstName field. Looks for searchText argument.

    http://www.advancesharp.com/blog/1211/angular-2-search-and-sort-with-ngfor-repeater-with-example
*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({  name: 'filterOrderby' })
export class FilterOrderByPipe implements PipeTransform {

    transform(records: Array<any>, args?: any): any {
        let sort = records;
        if (args.searchText !== undefined) {
             // console.log('args.searchText:' + args.searchText);
            sort = sort.filter(function(lastName){
                return lastName.firstName.toLowerCase().indexOf(args.searchText) > -1;
            });
        }
        sort = sort.sort(function(a, b){
            if (a[args.property] < b[args.property]) {
                return -1 * args.direction;
            } else if ( a[args.property] > b[args.property]) {
                return 1 * args.direction;
            } else {
                return 0;
            }
        }).slice(args.startPerson, args.endPerson);

        return sort;
    }
}
