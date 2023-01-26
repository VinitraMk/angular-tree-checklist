import { Component } from '@angular/core';

@Component({
  selector: 'app-molecule',
  templateUrl: './molecule.component.html',
  styleUrls: ['./molecule.component.css']
})
export class MoleculeComponent {

  constructor(){}

  nodes: any[] = [];

  handleSelectionChange(data: any[]) {
    console.log(data);
    this.nodes = data.slice(0, data.length);
  }

  handleCheckboxChange(data: any[]) {
    console.log(data);
    this.nodes = data.slice(0, data.length);
  }

  clearAll() {
    this.nodes = this.nodes.map((x) => {
      if (x.checked) {
        return Object.assign({}, x, {
          checked: !x.checked,
        });
      } else {
        return x;
      }
    });
  }
}
