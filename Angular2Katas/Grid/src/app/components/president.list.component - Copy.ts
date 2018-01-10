import { Component, Input, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { PresidentService } from '../services/president.service';
import { President } from '../president';

@Component({
    selector: 'app_president_list',
    template: require('./president.list.component.html'),
})

export class PresidentListComponent implements OnInit {
    public currentPage = 0;
    public pageLength = 3;
    public message = 'hello';
    public people: any[] = [
      {fn: 'Donald', ln: 'Trump'},
      {fn: 'Barrack', ln: 'Obama'},
      {fn: 'George W', ln: 'Bush'},
      {fn: 'Bill', ln: 'Clinton'},
      {fn: 'George H', ln: 'Bush'},
      {fn: 'Ronald', ln: 'Reagon'},
      {fn: 'Gerald', ln: 'Ford'},
      {fn: 'Jimmy', ln: 'Carter'},
    ];

    public presidents: President[] = [];
    errorMessage = '';
    isLoading = true;

    constructor(private presidentService: PresidentService) { }
    public ngOnInit() {
        this.presidentService
          .getAll()
          .subscribe(
             /* happy path */ p => this.presidents = p,
             /* error path */ e => this.errorMessage = e,
             /* onComplete */ () => this.isLoading = false);
      }

    public get startPerson(): number {
        return this.currentPage * this.pageLength;
    }

    public get endPerson(): number {
        return (this.currentPage + 1) * this.pageLength;
    }
    public prevPage() {
      if (this.currentPage > 0) {
          this.currentPage--;
      }
    }
    public nextPage() {
        const pages: number = Math.ceil(this.people.length / this.pageLength) - 1;

        if (this.currentPage < pages) {
            this.currentPage++;
        }
    }

    public get ceiling(): number{
        return Math.ceil(this.people.length / this.pageLength);
    }

}
