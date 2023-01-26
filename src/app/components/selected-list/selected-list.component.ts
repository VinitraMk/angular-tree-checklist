import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  templateUrl: './selected-list.component.html',
  selector: 'selected-list',
})
export class SelectedListComponent {
  @Input() selectionList: any[] = [];
  @Output() onSelectionChanged: EventEmitter<any> = new EventEmitter<any>();

  handleChange(item: any) {
    console.log('change', item);
    this.onSelectionChanged.emit(
      this.selectionList.map((x) => {
        if (x.item === item.item && x.checked) {
          return Object.assign({}, x, {
            checked: false,
          });
        } else {
          return x;
        }
      })
    );
  }
}
