import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {
  @Input() box;

  boxClicked = () => {
    alert(`Button in div ${this.box.boxId} clicked.`);
  }
}
