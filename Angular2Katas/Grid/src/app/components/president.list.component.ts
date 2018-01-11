import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PresidentService } from '../services/president.service';
import { President } from '../president';
import { FilterOrderByPipe } from '../components/filter.orderby.pipe.component';
import { LastNamePipe } from '../components/lastname.pipe.component';

@Component({
    selector: 'app-president-list',
    template: require('./president.list.component.html'),
})

export class PresidentListComponent implements OnInit {
    public currentPage = 0;
    public pageLength = 10;

    public direction = 1;
    public isDesc = false;
    public column = 'startDate';
    public searchText: string;
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
        const pages: number = Math.ceil(this.filteredPresidents.length / this.pageLength) - 1;

        if (this.currentPage < pages) {
            this.currentPage++;
        }
    }

    public get ceiling(): number{
        return Math.ceil(this.filteredPresidents.length / this.pageLength);
    }

    public get presidentsLength(): number {
        return this.filteredPresidents.length;
    }

    public sortList(property) {
        this.isDesc = ! this.isDesc;
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
        this.currentPage = 0;
    }

    public get filterOrderyby(): any {
        let filterRows: President[] = new FilterOrderByPipe().transform(this.presidents, {property: this.column, direction: this.direction,
             startPerson: 0, endPerson: this.presidents.length , searchText: this.searchText});
        console.log(filterRows);
        return filterRows;
    }

    public get filteredPresidents(): any {
        return new LastNamePipe().transform(this.presidents, this.searchText);
    }
}
