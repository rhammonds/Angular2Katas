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
    public pageLength = 10;
    public message = 'hello';

    public direction: number = 1;
    public isDesc: boolean = false;
    public column: string = 'startDate';


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
        const pages: number = Math.ceil(this.presidents.length / this.pageLength) - 1;

        if (this.currentPage < pages) {
            this.currentPage++;
        }
    }

    public get ceiling(): number{
        return Math.ceil(this.presidents.length / this.pageLength);
    }

    sort(property) {
        this.isDesc = ! this.isDesc;
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    }
}
