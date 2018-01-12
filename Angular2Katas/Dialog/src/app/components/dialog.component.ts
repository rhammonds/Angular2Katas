// https://stackblitz.com/edit/angular-ksz4ml
import { Component,  Input, Output, OnChanges, EventEmitter, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { openAnimation, slideInDownAnimation } from './animations';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  animations: [slideInDownAnimation]
})
export class DialogComponent  {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  //@HostBinding('@routeAnimation') routeAnimation = true;
  //@HostBinding('style.display')   display = 'block';
  //@HostBinding('style.position')  position = 'absolute';
  constructor() { }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
