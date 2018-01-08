import { Component, Input } from "@angular/core";

@Component({
    selector: 'passed-value',
    template: `<label>Passed Value is "{{passedValue}}"</label>`,
})
export class PassedValueComponent {
    @Input('pv') passedValue: string;
}
