import { Component, Input } from "@angular/core";

@Component({
    selector: "add-to-list",
    template: `            
    <div>
        <label for="new-color-input">New List Item:</label>
        <input type="text" id="new-color-input"
        name="newItem" [(ngModel)]="newItem"
        (keyup.enter)="addItem()">
        <button type="button" (click)="addItem()">Add</button>
        <button type="button" (click)="clearItems()">Clear</button>
    </div>
    <br>
    <div>
        <button type="button" (click)="removeLastItem()">Remove Last</button>
        <button type="button" (click)="sortList()">Sort List</button>
        <button type="button" (click)="lowerCase()">Lower Case</button>
        <button type="button" (click)="capitalize()">Capitalize</button>
        <button type="button" (click)="slice()">Slice</button>
        <button type="button" (click)="reset()">Reset</button>
    </div>
    <br>
    <div   class="col-md-8">
        <h1>{{header|uppercase}}</h1>
        <ul>
            <li *ngFor="let item of items">
                {{item}}
            </li>
        </ul>
    
    </div>

`,
})
export class AddToListComponent {
    public items: string[] = ["Dog", "Cat", "Bird", "Fish", "Horse"];
    public newItem: string = "";
    public addItem() {
        this.items.push(this.newItem);
        this.newItem = "";
    }  
    public clearItems() {
        this.items = [];
    }  
    public removeLastItem() {
        this.items.pop();
    }
    public sortList() {
        this.items.sort();
    }
    public lowerCase() {
        this.items = this.items.map(function(x){ return x.toLowerCase() })
    }
    public capitalize() {
        this.items = this.items.map(function(x){ return x.charAt(0).toUpperCase() + x.slice(1) })
    }
    public reset() {
        this.items = ["Dog", "Cat", "Bird", "Fish", "Horse"];
    }
    public slice() {
        this.items = this.items.map(function(x){ 
            if(x.length>1){return x.slice(1);}
            return x; 
        
        });
    }
}